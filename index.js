$(function() {
    console.log('Test')
   

    let inputProductOne = $('#inputProductOne')
    
    inputProductOne.on('keyup',function(e) {
        let porductOneVal = parseInt(inputProductOne.val())
       
        let produuctOneQuantity = $('#productOneQuantity')
        
        let calculate = 100 - porductOneVal
      
        produuctOneQuantity.text(calculate)
      
        
    })

    let inputProductTwo = $('#inputProductTwo')
    
    inputProductTwo.on('keyup',function(e) {
        let porductOneVal = parseInt(inputProductTwo.val())
       
        let productTwoQuantity = $('#productTwoQuantity')
        
        let calculate = 100 - porductOneVal
      
        productTwoQuantity.text(calculate)
      
        
    })

    let inputProductThree = $('#inputProductThree')
    
    inputProductThree.on('keyup',function(e) {
        let porductOneVal = parseInt(inputProductThree.val())
       
        let productThreeQuantity = $('#productThreeQuantity')
        
        let calculate = 100 - porductOneVal
      
        productThreeQuantity.text(calculate)
      
        
    })
    

    let submitBtn = $('#submit')
    submitBtn.on('click',function(e) {
        e.preventDefault()
        let inputProductOne = $('#inputProductOne').val()
        let inputProductTwo = $('#inputProductTwo').val()
        let inputProductThree = $('#inputProductThree').val()
        let inputProductOneAsNumber = parseInt(inputProductOne)
        console.log(typeof inputProductOneAsNumber)
        let total1 = parseInt(inputProductOne) * 30
        let total2 = parseInt(inputProductTwo) * 30
        let total3 = parseInt(inputProductThree) * 30
        let totalPrice = total1 + total2 + total3
        let table2 = $('#table2')
        table2.html(`
        <table class="table table-sm">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Price</th>
            <th scope="col">Bought</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Product 1</td>
            <td>30$</td>
            <td id="boughtTotalOne">${inputProductOne}</td>
            <td id="productOneTotal">${total1}$</td>
          </tr>
          <tr>
            <th scope="row">2</th>
            <td>Product 2</td>
            <td>30$</td>
            <td id="boughtTotalTwo">${inputProductTwo}</td>
            <td id="productTwoTotal"> ${total2}$</td>
          </tr>
          <tr>
            <th scope="row">3</th>
            <td>Product 3</td>
            <td>30$</td>
            <td id="boughtTotalThree">${inputProductThree}</td>
            <td id="productThreeTotal">${total3}$</td> 
          </tr>
         
        </tbody>
       
      </table>
      
      <h1>Total Price: ${totalPrice}$`)

    })
})
