import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { PopService } from '../services/pop.service';


@Component({
  selector: 'app-pop',
  templateUrl: './pop.component.html',
  styleUrls: ['./pop.component.css']
})
export class PopComponent implements OnInit {
  pop!: FormGroup;
  formSubmitted: boolean = false;
  dataGot: any;
  desiginationdata:any[]=[]
  roledata:any[]=[]
  titledata:any[]=[]
  owingdata:any[]=[]
 productdata:any[]=[]
  productgroup:any[]=[]
  productworkdata:any[]=[]
  unifieddata:any[]=[]
  unitdata:any[]=[]
  workgroupdata:any[]=[]
  Locationdata:any[]=[]
  dd:any[]=[];
  tempVar: any;

  constructor(private formBuilder: FormBuilder, private http: HttpClient,private popser:PopService) {}


  
  ngOnInit(): void
   {
    this.popser.getdesigination("Product_Group").subscribe({
      next:(data:any)=>{
        this.productgroup = data;
      },
      error:()=>{this.productgroup= []}
    });

    this.popser.getdesigination("HL_Designation").subscribe({
      next:(data:any)=>{
        this.desiginationdata = data;
      },
      error:()=>{this.desiginationdata= []}
    });

    this.popser.getdesigination("HL_Title").subscribe({
      next:(data:any)=>{
        this.titledata = data;
      },
      error:()=>{this.titledata= []}
    });

    this.popser.getdesigination("HL_Role").subscribe({
      next:(data:any)=>{
        this.roledata = data;
      },
      error:()=>{this.roledata= []}
    });

    this.popser.getdesigination("Owning").subscribe({
      next:(data:any)=>{
        this.owingdata = data;
      },
      error:()=>{this.owingdata= []}
    });

    this.popser.getdesigination("Product").subscribe({
      next:(data:any)=>{
        this.productdata = data;
      },
      error:()=>{this.productdata= []}
    });

    this.popser.getdesigination("Product_Work_Area").subscribe({
      next:(data:any)=>{
        this.productworkdata = data;
      },
      error:()=>{this.productworkdata= []}
    });

    this.popser.getdesigination("Unified_Roles").subscribe({
      next:(data:any)=>{
        this.unifieddata = data;
      },
      error:()=>{this.unifieddata= []}
    });

    this.popser.getdesigination("Unit").subscribe({
      next:(data:any)=>{
        this.unitdata = data;
      },
      error:()=>{this.unitdata= []}
    });
    this.popser.getdesigination("Location").subscribe({
      next:(data:any)=>{
        this.Locationdata = data;
      },
      error:()=>{this.Locationdata= []}
    });

    this.popser.getdesigination("Work_Group").subscribe({
      next:(data:any)=>{
        this.workgroupdata = data;
      },
      error:()=>{this.workgroupdata= []}
    });
    this.pop = this.formBuilder.group({
      DedalusId: ['', Validators.required],
      EmployeeCode: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      EmployeeName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      Employee_MailId: ['', [Validators.required, Validators.email]],
      Gender: ['', Validators.required],
      Location: ['', Validators.required],
      ManagerName: ['', [Validators.required, Validators.pattern('^[A-Za-z]+$')]],
      ManagerMailId: ['',  [Validators.required, Validators.email]],
      ManagerCode: ['',  [Validators.required, Validators.pattern('^[0-9]+$')]],
      DateofJoin: ['', Validators.required],
      ProductGroup: ['', Validators.required],
      Product: ['', Validators.required],
      ProductWorkArea: ['', Validators.required],
      WorkGroup: ['', Validators.required],
      UnifiedRoles: ['', Validators.required],
      HLRole: ['', Validators.required],
      HLDesignation: ['', Validators.required],
      HLTitle: ['', Validators.required],      
      Unit: ['', Validators.required],
      Owning: ['', Validators.required],      
    });
   
  }
  clearForm(): void {
    this.pop.reset();
    alert("Are you sure?");
  }

  submitForm(): void {
    if (this.pop.valid) {
      let formData = this.pop.value;  
      this.http.post('http://nhsappchna6210.cscidp.net/rdb/api/employee', formData)
        .subscribe(
          response => {
            console.log(this.pop);
            console.log('Success:', response);
            alert("Success......");  
            this.pop.reset();
            this.dataGot = response;
            // this.pop.patchValue({
            //   EmployeeCode:this.dataGot.EmployeeCode
             // })
            formData = this.pop.value;  
            this.formSubmitted = false;  
          },
          error => {
            console.error('Error:', error);
            alert("Not Updated......");
          }
        );
    } else {
      // console.log('Invalid form');
      // const missingFields = [];
  
      // for (const control in this.pop.controls) {
      //   if (this.pop.controls[control].invalid) {
      //     missingFields.push(control);
      //   }
      // }
  
      alert("Please fill in the mandatory fields ");
    }
  }
  
  getdomain(descode:any){
    console.log("ProductWorkArea",this.pop.value.ProductWorkArea)
    // this.tempVar = "Advisor Data Architect"
    // descode = this.pop.get('HLDesignation')
    this.popser.getdesigination(descode).subscribe((res:any)=>{
    switch(descode){
      case "HL_Designation":
          this.desiginationdata=res;
          break;
      case "HL_Role":
            this.roledata=res;
            break;
      case "HL_Title":
          this.titledata=res;
          break;
            
      case "Owning":
          this.owingdata=res;
           break;
      case "Product":
        this.productdata=res;
        break;
      case "Product_Work_Area":
         this.productworkdata=res;
         break;
      case "Unified_Roles":
        this.unifieddata=res;
        break;
      case "Unit":
        this.unitdata=res;
        break;
       case "Work_Group":
        this.workgroupdata=res;
        break;
        case "Product_Group":
          this.productgroup=res;
          break;
      default:
          console.log("It's the weekend!");  

    }
    })
    
    }
}
