class pizza{
  constructor(s,mt,vt){
    this.size = s
    this.meatToppings = mt
    this.veggieToppings = vt
  }
  //type c[onstructor below
sizeCost(){
  if(this.size == "small"){
  return 7.99
}
  else if(this.size == "Medium"){
  return 9.99
}
  else if(this.size == "Large")
return 12.99
}
  else if(this.size == "Extra-Large"){
  return 15.99
}
}

  //type instance functions below
this.toppingCost(top){
  if(top = "meat"){
    return(this.meatToppings*.length * .99);
  }
if(top = "veggie"){
  return(this.veggieToppings*.length * .50);
}
}
this.price(){
  this.price()=this.sizeCost() + this.toppings();
  return this.price;
}
  //type class functions below
this.promotionalDeal(Pizza, percent){
  

}

}
