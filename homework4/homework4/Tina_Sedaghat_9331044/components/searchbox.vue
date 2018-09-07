<template>
  <div class="row">
      <span class="col-lg-12">
          <button id="btn1" class="btn btn-default" type="submit"><i class="fa fa-search-plus" aria-hidden="true"></i></button>
          <button id="btn2" class="btn btn-default" type="submit"><i class="fa fa-search" aria-hidden="true"></i></button>
            <input type="text" class="form-control" placeholder="جستجوی فیلم، سریال، بازیگر، کارگردان" name="search">
            
      </span>
    </div> 
</template>


<style>
.col-lg-12{
    direction: rtl;
    top: 12vh;
    height:6vh;
    width: 27vw;
    display: flex;
}
#btn1{
    border-radius: 20px;
    outline:none;
     border:1px solid #e4e5e8;

  background-color: rgb(24, 206, 115); 
  position: relative;
  left: 5px;
}
#btn2{
    border-radius: 20px;
    outline:none;
     border:1px solid #e4e5e8;

  background-color: rgb(24, 206, 115); 
    position: relative;
  left: 2px;
}
</style>