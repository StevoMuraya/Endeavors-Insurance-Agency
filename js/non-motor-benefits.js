//////////////////////////////////////////////////////////
// CASH CONCUTINATION JS
/////////////////////////////////////////////////////////
function cashConcut() {
  var sum_insured = document.getElementById("sum_insured_input");
  var sum_insured_poa = document.getElementById("sum_insured_poa");

  var cash = sum_insured.value;
  var clean_up = cash.replace("Kshs ", "");
  var clean_up2 = clean_up
    .replace(/,/g, "")
    .replace("N", "")
    .replace("NaN", "")
    .replace("n", "")
    .replace("E", "")
    .replace("e", "")
    .replace("A", "")
    .replace("a", "")
    .replace("Q", "")
    .replace("q", "");

  if (clean_up2 == "") {
    sum_insured.value = "";
  } else {
    var no_Nans = clean_up2.replace("NaN", "");
    var no_zeros = parseInt(no_Nans);
    var new_cash = no_zeros.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    sum_insured.value = "Kshs " + new_cash;
    sum_insured_poa.value = no_zeros;
  }
}

//////////////////////////////////////////////////////////
// MV CLASS SELECTION CODE STATEMENT
/////////////////////////////////////////////////////////
var policy_remarks = document.getElementById("policy_remarks");
var mv_class = document.getElementById("class_selection");
var selected = mv_class.options[mv_class.selectedIndex].value;

var benefits_list = document.getElementById("benefits_list");

mv_class.addEventListener("change", function () {
  if (mv_class.options[mv_class.selectedIndex].value == "") {
    benefits_list.style.display = "none";
  } else {
    benefits_list.style.display = "flex";
  }
});

var reg_number = document.getElementById("reg_number");
var chasis_number = document.getElementById("chasis_number");
var reg_number_holder = document.getElementById("reg_number_holder");
var chasis_number_holder = document.getElementById("chasis_number_holder");

var pal_holder = document.getElementById("pal_holder");
var mp_holder = document.getElementById("mp_holder");
var pvt_holder = document.getElementById("pvt_holder");
var tpl_holder = document.getElementById("tpl_holder");

mv_class.addEventListener("change", function () {
  if (mv_class.options[mv_class.selectedIndex].value == "Work Injury Benefit") {
    chasis_number_holder.style.display = "none";
    reg_number_holder.style.display = "none";
    chasis_number.required = false;
    reg_number.required = false;
    policy_remarks.rows = "8";
    policy_remarks.style.maxHeight = "90px";

    pal_holder.style.display = "flex";
    mp_holder.style.display = "none";
    pvt_holder.style.display = "none";
    tpl_holder.style.display = "none";
  } else if (
    mv_class.options[mv_class.selectedIndex].value == "Contrators all risk"
  ) {
    chasis_number_holder.style.display = "none";
    reg_number_holder.style.display = "none";
    chasis_number.required = false;
    reg_number.required = false;
    policy_remarks.rows = "8";
    policy_remarks.style.maxHeight = "90px";

    pal_holder.style.display = "none";
    mp_holder.style.display = "flex";
    pvt_holder.style.display = "flex";
    tpl_holder.style.display = "none";
  } else if (
    mv_class.options[mv_class.selectedIndex].value ==
    "Contractor's Plant and Machinery"
  ) {
    chasis_number_holder.style.display = "flex";
    reg_number_holder.style.display = "flex";
    chasis_number.required = true;
    reg_number.required = true;
    policy_remarks.rows = "13";
    policy_remarks.style.maxHeight = "190px";

    pal_holder.style.display = "flex";
    mp_holder.style.display = "none";
    pvt_holder.style.display = "none";
    tpl_holder.style.display = "flex";
  } else {
    chasis_number_holder.style.display = "none";
    reg_number_holder.style.display = "none";
    chasis_number.required = false;
    reg_number.required = false;
    policy_remarks.rows = "8";
    policy_remarks.style.maxHeight = "90px";

    benefits_list.style.display = "none";
    pal_holder.style.display = "none";
    mp_holder.style.display = "none";
    pvt_holder.style.display = "none";
    tpl_holder.style.display = "none";
  }
});

//////////////////////////////////////////////////////////
// MV CLASSSELECTIONCODE STATEMENT
/////////////////////////////////////////////////////////

var pal = document.getElementById("pal");
var pal_benefit_basic_premium = document.getElementById(
  "pal_benefit_basic_premium"
);
var tpl = document.getElementById("tpl");
var tpl_benefit_basic_premium = document.getElementById(
  "tpl_benefit_basic_premium"
);
var pvt = document.getElementById("pvt");
var pvt_benefit_basic_premium = document.getElementById(
  "pvt_benefit_basic_premium"
);
var mp = document.getElementById("mp");
var mp_benefit_basic_premium = document.getElementById(
  "mp_benefit_basic_premium"
);

tpl.addEventListener("change", function () {
  if (tpl.checked) {
    tpl_basic_premium.disabled = false;
    tpl_basic_premium.required = true;
  } else {
    tpl_basic_premium.disabled = true;
    tpl_basic_premium.required = false;
  }
});
pal.addEventListener("change", function () {
  if (pal.checked) {
    pal_basic_premium.disabled = false;
    pal_basic_premium.required = true;
  } else {
    pal_basic_premium.disabled = true;
    pal_basic_premium.required = false;
  }
});
mp.addEventListener("change", function () {
  if (mp.checked) {
    mp_basic_premium.disabled = false;
    mp_basic_premium.required = true;
  } else {
    mp_basic_premium.disabled = true;
    mp_basic_premium.required = false;
  }
});
pvt.addEventListener("change", function () {
  if (pvt.checked) {
    pvt_basic_premium.disabled = false;
    pvt_basic_premium.required = true;
  } else {
    pvt_basic_premium.disabled = true;
    pvt_basic_premium.required = false;
  }
});
