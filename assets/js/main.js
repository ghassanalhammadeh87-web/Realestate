let mobile_nav_icon =document.getElementById('mobile-nav-icon');
let aside =document.getElementById ('aside');

mobile_nav_icon.addEventListener('click', function()
{
    if(aside.style.right==="0px"){aside.style.right="-250px"}else{aside.style.right="0px"}
});

// hide side bar with mouse click out the sidebar
document.addEventListener('click', function(event){
    if(!aside.contains(Event.target) && event.target !== mobile_nav_icon ){
        aside.style.right = "-250px";
    }
});




// tel code Country 
// var input = document.querySelector("#phone");
// window.intlTelInput(input, {
//   // optional options here
//   separateDialCode: true, // This option separates the dial code from the main input field
//   utilsScript: "cdnjs.cloudflare.com" // required for phone number formatting/validation
// });

// $(document).ready(function() {

//     $('.iti__flag-container').click(function() {
    
//     var countryCode = $('.iti__selected-flag').attr('title');
    
//     var countryCode = countryCode.replace(/[⁰-9]/g,'')
    
//     $('#phone').val("");
    
//     $('#phone').val("+"+countryCode+" "+ $('#phone').val());
    
//     });
    
//     });



// const input = document.querySelector("#phone");
//   window.intlTelInput(input, {
//     loadUtils: () => import("https://cdn.jsdelivr.net/npm/intl-tel-input@25.14.1/build/js/utils.js"),
//   });


// get the country data from the plugin
const countryData = window.intlTelInput.getCountryData();
const input = document.querySelector("#phone");
const addressDropdown = document.querySelector("#address-country");

// populate the country dropdown
for (let i = 0; i < countryData.length; i++) {
  const country = countryData[i];
  const optionNode = document.createElement("option");
  optionNode.value = country.iso2;
  const textNode = document.createTextNode(country.name);
  optionNode.appendChild(textNode);
  addressDropdown.appendChild(optionNode);
}

// init plugin
const iti = window.intlTelInput(input, {
  initialCountry: "us",
  loadUtils: () => import("/intl-tel-input/js/utils.js?1765894508450") // for formatting/placeholders etc
});

// set address dropdown's initial value
addressDropdown.value = iti.getSelectedCountryData().iso2;

// listen to the telephone input for changes
input.addEventListener('countrychange', () => {
  addressDropdown.value = iti.getSelectedCountryData().iso2;
});

// listen to the address dropdown for changes
addressDropdown.addEventListener('change', () => {
  iti.setCountry(addressDropdown.value);
});