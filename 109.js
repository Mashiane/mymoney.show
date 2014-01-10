
(function(){var all=document.getElementsByTagName('*');for(var i=0;i<all.length;i++)if(typeof all[i].id!='undefined'&&typeof window[all[i].id]=='undefined')window[all[i].id]=all[i];})()
browserWarningMessage('Please use Google Chrome, Apple Safari or another supported browser.');
if (navigator.userAgent.indexOf('iPad') !== -1) {
  var splashscreen = document.createElement('link');
  splashscreen.rel = 'apple-touch-startup-image';
  splashscreen.href = '196.png';
  document.getElementsByTagName('head')[0].appendChild(splashscreen);
}

window.addEventListener('load', function() {
  WhatToDo.style.display = 'block';
  NSB.List_jqm_init('lstWhatToDo','Make a Payment,Financial Needs,Reports,Settings,Database,Sign Out',true,'100%',false);
  lstWhatToDo_ref = new iScroll('lstWhatToDo_scroller',{ bounce:true, zoom:false });
  lstWhatToDo.refresh=function(){if (typeof lstWhatToDo_ref!='undefined') setTimeout(NSB.refresh,100,lstWhatToDo_ref)};
  NSB.addProperties(lstWhatToDo, lstWhatToDo_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('lstWhatToDo_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(hBar);
  NSB.addDisableProperty(hBar);


  if(typeof(hBar.onclick)=='function'){
    if(typeof(hBar_left)!='undefined') hBar_left.onclick=function() {hBar.onclick(hBar_left.getAttribute('nsbvalue'))};
    if(typeof(hBar_right)!='undefined') hBar_right.onclick=function() {hBar.onclick(hBar_right.getAttribute('nsbvalue'))}};
  WhatToDo.style.display = 'none';
}, false);
WhatToDo.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(WhatToDo);
lstWhatToDo.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = lstWhatToDo.getItem(i);
  switch (True) {
  case ((strItem) == "Make a Payment"):
    NextPayment();
	break;
  case ((strItem) == "Sign Out"):
    ChangeForm(frmSignIn);
	break;
  case ((strItem) == "Settings"):
    ChangeForm(frmSettings);
	break;
  case ((strItem) == "Invest / Pay-Off Debt"):
    ChangeForm(InvestPayOff);
	break;
  case ((strItem) == "Financial Needs"):
    ChangeForm(FinancialNeedsSelector,"slide");
	break;
  case ((strItem) == "Settings"):
    ChangeForm(Settings,"slide");
	break;
  case ((strItem) == "Database"):
    ChangeForm(frmDatabase);
	break;
  case ((strItem) == "Reports"):
    ChangeForm(MyReports,"slide");
  }
return savethefunction_rvar; }

WhatToDo.onshow = function() { savethefunction_rvar="";
  lstWhatToDo.Top = hBar.Height;
  lstWhatToDo.Height = WhatToDo.Height - hBar.Height;
  lstWhatToDo.refresh();
return savethefunction_rvar; }

hBar.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Sign Out"):
    ChangeForm(frmSignIn);
	break;
  case ((choice) == "About"):
    ChangeForm(frmAbout);
  }
return savethefunction_rvar; }


window.addEventListener('load', function() {
  MyAccounts.style.display = 'block';
  NSB.List_jqm_init('myaccountsList','Maintain Accounts,Assets,Liabilites,Incomes,Expenses',false,'100%',false);

  myaccountsList.refresh=function(){if (typeof myaccountsList_ref!='undefined') setTimeout(NSB.refresh,100,myaccountsList_ref)};

  NSB.addProperties(myaccountsList);
(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('myaccountsList_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(myaccountTitle);
  NSB.addDisableProperty(myaccountTitle);


  if(typeof(myaccountTitle.onclick)=='function'){
    if(typeof(myaccountTitle_left)!='undefined') myaccountTitle_left.onclick=function() {myaccountTitle.onclick(myaccountTitle_left.getAttribute('nsbvalue'))};
    if(typeof(myaccountTitle_right)!='undefined') myaccountTitle_right.onclick=function() {myaccountTitle.onclick(myaccountTitle_right.getAttribute('nsbvalue'))}};
  MyAccounts.style.display = 'none';
}, false);
MyAccounts.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(MyAccounts);
myaccountsList.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = myaccountsList.getItem(i);
  switch (True) {
  case ((strItem) == "Budgets"):
    ChangeForm(Budgets);
	break;
  case ((strItem) == "Maintain Accounts"):
    TypeOfList = "all";
    ChangeForm(AccountsList);
	break;
  case ((strItem) == "Assets"):
    TypeOfList = "assets";
    ChangeForm(AccountsList);
	break;
  case ((strItem) == "Liabilites"):
    TypeOfList = "liabilities";
    ChangeForm(AccountsList);
	break;
  case ((strItem) == "Incomes"):
    TypeOfList = "incomes";
    ChangeForm(AccountsList);
	break;
  case ((strItem) == "Expenses"):
    TypeOfList = "expenses";
    ChangeForm(AccountsList);
  }
return savethefunction_rvar; }

myaccountTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
      ChangeForm(frmSettings);
	break;
  case ((choice) == "Add"):
      NextAccount();
  }
return savethefunction_rvar; }

MyAccounts.onshow = function() { savethefunction_rvar="";
  myaccountsList.Top = myaccountTitle.Height;
  myaccountsList.Height = MyAccounts.Height - myaccountTitle.Height;
  myaccountsList.refresh();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  MyReports.style.display = 'block';
  NSB.List_jqm_init('myreportsList','Payments > Report,Payments > Per Year,Payments > Per Month,Accounts > Movements,Accounts > Top 10,Accounts > Report,Categories > Movements,Categories > Top 10,Categories > Report,Monthly Summary,Monthly Summary Charts,Monthly Income vs Expenses,Monthly Cost to Income,History Chart,Financial Position,Assets vs Liabilities,Incomes vs Expenses,Financial Report',false,'100%',false);

  myreportsList.refresh=function(){if (typeof myreportsList_ref!='undefined') setTimeout(NSB.refresh,100,myreportsList_ref)};

  NSB.addProperties(myreportsList);
(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('myreportsList_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(myreportTitle);
  NSB.addDisableProperty(myreportTitle);


  if(typeof(myreportTitle.onclick)=='function'){
    if(typeof(myreportTitle_left)!='undefined') myreportTitle_left.onclick=function() {myreportTitle.onclick(myreportTitle_left.getAttribute('nsbvalue'))};
    if(typeof(myreportTitle_right)!='undefined') myreportTitle_right.onclick=function() {myreportTitle.onclick(myreportTitle_right.getAttribute('nsbvalue'))}};
  MyReports.style.display = 'none';
}, false);
MyReports.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(MyReports);
myreportTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Home"):
    ChangeForm(WhatToDo);
  }
return savethefunction_rvar; }

myreportsList.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem;
  strItem = myreportsList.getItem(i);
  switch (True) {
    case ((strItem) == "Payments > Per Year"):
      catFrom = "payperyear";
      ChangeForm(PaymentsSelector);
	break;
    case ((strItem) == "Payments > Per Month"):
      catFrom = "paypermonth";
      ChangeForm(PaymentsSelector);
	break;
    case ((strItem) == "Payments > Report"):
      catFrom = "payreport";
      ChangeForm(PaymentsSelector);
	break;
    case ((strItem) == "Accounts > Movements"):
      catfrom = "myaccounts";
      ChangeForm(AccountMovements);
	break;
    case ((strItem) == "Accounts > Top 10"):
      ChangeForm(AccountPerformance);
	break;
    case ((strItem) == "Accounts > Report"):
      ChangeForm(AccountReport);
	break;
    case ((strItem) == "Categories > Movements"):
      ChangeForm(CategoryMovements);
	break;
    case ((strItem) == "Categories > Budgets"):
      catFrom = "mycategories";
      ChangeForm(CategoryBudgets);
	break;
    case ((strItem) == "Categories > Top 10"):
      ChangeForm(CategoryPerformance);
	break;
    case ((strItem) == "Categories > Report"):
      ChangeForm(CategoryReport);
	break;
    case ((strItem) == "Monthly Cost to Income"):
      catFrom = "monthlycost2income";
      ChangeForm(PaymentsSelector);
	break;
    case ((strItem) == "Monthly Income vs Expenses"):
      catFrom = "monthlyincomeexpenses";
      ChangeForm(PaymentsSelector);
	break;
    case ((strItem) == "History Chart"):
      catFrom = "historychart";
      ChangeForm(PaymentsSelector);
	break;
    case ((strItem) == "Monthly Summary"):
      catFrom = "costmeasurements";
      ChangeForm(PaymentsSelector);
	break;
    case ((strItem) == "Monthly Summary Charts"):
      catFrom = "monthlysummarychart";
      ChangeForm(PaymentsSelector);
	break;
    case ((strItem) == "Financial Position"):
      ChangeForm(FinancialPosition);
	break;
    case ((strItem) == "Assets vs Liabilities"):
      chartPer = "AL";
      ChangeForm(Charts);
	break;
    case ((strItem) == "Incomes vs Expenses"):
      chartPer = "IE";
      ChangeForm(Charts);
	break;
    case ((strItem) == "Financial Report"):
      ChangeForm(FinancialReport);
    }
return savethefunction_rvar; }

MyReports.onshow = function() { savethefunction_rvar="";
  myreportsList.Top = myreportTitle.Height;
  myreportsList.Height = MyReports.Height - myreportTitle.Height;
  myreportsList.refresh();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  MyInstitutions.style.display = 'block';
  NSB.addProperties(institutionsTitle);
  NSB.addDisableProperty(institutionsTitle);


  if(typeof(institutionsTitle.onclick)=='function'){
    if(typeof(institutionsTitle_left)!='undefined') institutionsTitle_left.onclick=function() {institutionsTitle.onclick(institutionsTitle_left.getAttribute('nsbvalue'))};
    if(typeof(institutionsTitle_right)!='undefined') institutionsTitle_right.onclick=function() {institutionsTitle.onclick(institutionsTitle_right.getAttribute('nsbvalue'))}};
  institutionsList_ref = new iScroll('institutionsList_scroller',{ bounce:true, zoom:false });
  institutionsList.refresh=function(){setTimeout(NSB.refresh,100,institutionsList_ref)};
  institutionsList.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,institutionsList)};
  NSB.Grid_init('institutionsList');
  NSB.addProperties(institutionsList,institutionsList_scroller)
  MyInstitutions.style.display = 'none';
}, false);
MyInstitutions.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(MyInstitutions);
function LoadInstitutions() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  institutionsList.Left = 0;
  institutionsList.Top = institutionsTitle.Height;
  institutionsList.Height = MyInstitutions.Height - institutionsTitle.Height;
  institutionsList.Width = MyInstitutions.Width;
  rCnt = institutionsList.getRowCount();
  institutionsList.deleteRows(rCnt);
  $("#institutionsList td").css("font-family" , "helvetica");
  sqlList = [];
  sqlList[0] = ["SELECT Id,Name FROM Institutions ORDER BY Name;" , InstitutionsListOk, InstitutionsListError];
  Sql(dbObj, sqlList);
}

function InstitutionsListOk(transaction, results) { savethefunction_rvar="";
 var  row,sName,sId,i,sedit,sdelete, skey;
  rCnt = 1;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sId = row["Id"];
    sName = row["Name"];
    skey = "Institutions*"  +  sId;
    localStorage.setItem(skey,sName);
    sedit = GridAddImageDefinitionAction(institutionsList,"edit" ,sId,"edit.png");
    sdelete = GridAddImageDefinitionAction(institutionsList,"delete" ,sId,"delete.png");
 // add a row to the grid
    institutionsList.addRows(1);
    institutionsList.setValue(rCnt,0,sName);
    institutionsList.setValue(rCnt,1,sedit);
    institutionsList.setValue(rCnt,2,sdelete);
    rCnt = rCnt + 1;
  }
  GridSetHeight(institutionsList,"32px");
  GridCenterAlign(institutionsList,1,2);
  GridAlternateColor(institutionsList);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function InstitutionsListError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

institutionsTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
      ChangeForm(frmSettings);
	break;
  case ((choice) == "Add"):
      NextInstitution();
  }
return savethefunction_rvar; }

function NextInstitution() { savethefunction_rvar="";
  sqlList = [];
  sqlList[0] = ["SELECT MAX(Id) as MaxValue FROM [Institutions];" , NextInstitutionOk, NextInstitutionError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

 // generate the next available institution id result
function NextInstitutionOk(transaction, results) { savethefunction_rvar="";
  recid = results.rows.item(0)["MaxValue"];
  recid = recid + 1;
  isnew = True;
  localStorage.setItem("action" ,"new");
  localStorage.setItem("id" , recid);
  ChangeForm(MaintainInstitutions);
return savethefunction_rvar; }

 // generate next institution id error
function NextInstitutionError(transaction, results) { savethefunction_rvar="";
  recid = -1;
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

MyInstitutions.onshow = function() { savethefunction_rvar="";
  LoadInstitutions();
return savethefunction_rvar; }

institutionsList.onclick = function() { savethefunction_rvar="";
 var  gRowCol;
  gRowCol = Split(event.target.id, "_");
  saction = LCase(gRowCol[1] );
  sId = gRowCol[2];
  localStorage.setItem("action" ,saction);
  localStorage.setItem("id" , sId);
  switch (True) {
  case ((saction) == "edit"):
    ChangeForm(MaintainInstitutions);
	break;
  case ((saction) == "delete"):
    NSB.MsgBox(InstitutionDelete,"Are you sure that you want to delete this institution record?" , 4+32, "Confirm Delete");
  }
return savethefunction_rvar; }


function InstitutionDelete(result) {
  if(result != 6 )  { return; }
 var  delRec;
 delRec = new Object();
 var  delname;
 delname = localStorage.getItem("id");
  delRec["Id"]=delname;
  DeleteRecord("Institutions" , delRec);
  LoadInstitutions();
}

window.addEventListener('load', function() {
  MaintainCategories.style.display = 'block';
  NSB.addProperties(categoryEditorT);
  NSB.addDisableProperty(categoryEditorT);


  if(typeof(categoryEditorT.onclick)=='function'){
    if(typeof(categoryEditorT_left)!='undefined') categoryEditorT_left.onclick=function() {categoryEditorT.onclick(categoryEditorT_left.getAttribute('nsbvalue'))};
    if(typeof(categoryEditorT_right)!='undefined') categoryEditorT_right.onclick=function() {categoryEditorT.onclick(categoryEditorT_right.getAttribute('nsbvalue'))}};


  NSB.MultiInput_init('categoryEditorI');

  NSB.addProperties(categoryEditorI);
  MaintainCategories.style.display = 'none';
}, false);
MaintainCategories.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(MaintainCategories);
MaintainCategories.onshow = function() { savethefunction_rvar="";
  categoryEditorI.Left = 0;
  categoryEditorI.Top = 42;
  categoryEditorI.Width = MaintainCategories.Width - 20;
  ReadCategoryS();
return savethefunction_rvar; }

categoryEditorT.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Save"):
    SaveCategoryS();
	break;
  case ((choice) == "Back"):
    ChangeForm(CategoryList);
  }
return savethefunction_rvar; }

function ReadCategoryS() { savethefunction_rvar="";
   var  svalue, skey;
    svalue = localStorage.getItem("id");
    if(IsNull(svalue) == True) {
      categoryEditorI.setValue(1,"");
 } else {
      skey = "Categories*"  +  svalue;
      svalue = localStorage.getItem(skey);
      categoryEditorI.setValue(1,svalue);
    }
return savethefunction_rvar; }

function SaveCategoryS() { savethefunction_rvar="";
 var  snew;
 // check if old value = new value
  snew = categoryEditorI.getValue(1);
  snew = Trim(snew);
  if(Len(snew) == 0) {
    NSB.MsgBox("The category cannot be blank, enter a category name please.");
     return;
  }
 var  sid, saction;
  sid = localStorage.getItem("id");
  saction = localStorage.getItem("action");
  snew = Replace(snew,"'" ,"''");
  snew = InSingleQuote(snew);
 var  nrecord;
 nrecord = new Object();
  nrecord["CategoryId"]=sid;
  nrecord["CategoryName"]=snew;
  nrecord["Transactions"]="0";
  switch (True) {
  case ((saction) == "new"):
    InsertRecord("Categories" ,nrecord);
	break;
  default:
   var  nwhere;
 nwhere = new Object();
    nwhere["CategoryId"]=sid;
    UpdateRecord("Categories" ,nrecord,nwhere);
  }
}
window.addEventListener('load', function() {
  CategoryList.style.display = 'block';
  NSB.addProperties(categorieslistTitle);
  NSB.addDisableProperty(categorieslistTitle);


  if(typeof(categorieslistTitle.onclick)=='function'){
    if(typeof(categorieslistTitle_left)!='undefined') categorieslistTitle_left.onclick=function() {categorieslistTitle.onclick(categorieslistTitle_left.getAttribute('nsbvalue'))};
    if(typeof(categorieslistTitle_right)!='undefined') categorieslistTitle_right.onclick=function() {categorieslistTitle.onclick(categorieslistTitle_right.getAttribute('nsbvalue'))}};
  categoriesListList_ref = new iScroll('categoriesListList_scroller',{ bounce:true, zoom:false });
  categoriesListList.refresh=function(){setTimeout(NSB.refresh,100,categoriesListList_ref)};
  categoriesListList.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,categoriesListList)};
  NSB.Grid_init('categoriesListList');
  NSB.addProperties(categoriesListList,categoriesListList_scroller)
  CategoryList.style.display = 'none';
}, false);
CategoryList.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(CategoryList);
function LoadCategories() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  categoriesListList.Left = 0;
  categoriesListList.Top = categorieslistTitle.Height;
  categoriesListList.Height = CategoryList.Height - categorieslistTitle.Height;
  categoriesListList.Width = CategoryList.Width;
  rCnt = categoriesListList.getRowCount();
  categoriesListList.deleteRows(rCnt);
  $("#categoriesListList td").css("font-family" , "helvetica");
  sqlList = [];
  sqlList[0] = ["SELECT CategoryId,CategoryName FROM Categories ORDER BY CategoryName;" , CategoryListOk, CategoryListError];
  Sql(dbObj, sqlList);
}

function CategoryListOk(transaction, results) { savethefunction_rvar="";
 var  row,sCategoryName,sCategoryId,i,sedit,sdelete, skey;
  rCnt = 1;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sCategoryId = row["CategoryId"];
    sCategoryName = row["CategoryName"];
    skey = "Categories*"  +  sCategoryId;
    localStorage.setItem(skey,sCategoryName);
    sedit = GridAddImageDefinitionAction(categoriesListList,"edit" ,sCategoryId,"edit.png");
    sdelete = GridAddImageDefinitionAction(categoriesListList,"delete" ,sCategoryId,"delete.png");
 // add a row to the grid
    categoriesListList.addRows(1);
    categoriesListList.setValue(rCnt,0,sCategoryName);
    categoriesListList.setValue(rCnt,1,sedit);
    categoriesListList.setValue(rCnt,2,sdelete);
    rCnt = rCnt + 1;
  }
  GridSetHeight(categoriesListList,"32px");
  GridCenterAlign(categoriesListList,1,2);
  GridAlternateColor(categoriesListList);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function CategoryListError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

categorieslistTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
      ChangeForm(frmSettings);
	break;
  case ((choice) == "Add"):
      NextCategory();
  }
return savethefunction_rvar; }

function NextCategory() { savethefunction_rvar="";
  sqlList = [];
  sqlList[0] = ["SELECT MAX(CategoryId) as MaxValue FROM [Categories];" , NextCategoryOk, NextCategoryError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

 // generate the next available institution id result
function NextCategoryOk(transaction, results) { savethefunction_rvar="";
  recid = results.rows.item(0)["MaxValue"];
  recid = recid + 1;
  isnew = True;
  localStorage.setItem("action" ,"new");
  localStorage.setItem("id" , recid);
  ChangeForm(MaintainCategories);
return savethefunction_rvar; }

 // generate next institution id error
function NextCategoryError(transaction, results) { savethefunction_rvar="";
  recid = -1;
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

CategoryList.onshow = function() { savethefunction_rvar="";
  LoadCategories();
return savethefunction_rvar; }

categoriesListList.onclick = function() { savethefunction_rvar="";
 var  gRowCol;
  gRowCol = Split(event.target.id, "_");
  saction = LCase(gRowCol[1] );
  sid = gRowCol[2];
  localStorage.setItem("action" ,saction);
  localStorage.setItem("id" , sid);
  switch (True) {
  case ((saction) == "edit"):
    ChangeForm(MaintainCategories);
	break;
  case ((saction) == "delete"):
    NSB.MsgBox(CategoryDelete,"Are you sure that you want to delete this category record?" , 4+32, "Confirm Delete");
  }
return savethefunction_rvar; }


function CategoryDelete(result) {
  if(result != 6 )  { return; }
 var  delRec;
 delRec = new Object();
 var  delname;
 delname = localStorage.getItem("id");
  delRec["CategoryId"]=delname;
  DeleteRecord("Categories" , delRec);
  ResetAccounts();
  ResetMonthlySummary();
  LoadCategories();
}

window.addEventListener('load', function() {
  CategoryMovements.style.display = 'block';
  NSB.addProperties(categoryMovementTitle);
  NSB.addDisableProperty(categoryMovementTitle);


  if(typeof(categoryMovementTitle.onclick)=='function'){
    if(typeof(categoryMovementTitle_left)!='undefined') categoryMovementTitle_left.onclick=function() {categoryMovementTitle.onclick(categoryMovementTitle_left.getAttribute('nsbvalue'))};
    if(typeof(categoryMovementTitle_right)!='undefined') categoryMovementTitle_right.onclick=function() {categoryMovementTitle.onclick(categoryMovementTitle_right.getAttribute('nsbvalue'))}};
  grdCategoryMovements_ref = new iScroll('grdCategoryMovements_scroller',{ bounce:true, zoom:false });
  grdCategoryMovements.refresh=function(){setTimeout(NSB.refresh,100,grdCategoryMovements_ref)};
  grdCategoryMovements.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,grdCategoryMovements)};
  NSB.Grid_init('grdCategoryMovements');
  NSB.addProperties(grdCategoryMovements,grdCategoryMovements_scroller)
  CategoryMovements.style.display = 'none';
}, false);
CategoryMovements.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(CategoryMovements);
function LoadCategoryMovements() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  grdCategoryMovements.Left = 0;
  grdCategoryMovements.Top = categoryMovementTitle.Height;
  grdCategoryMovements.Height = CategoryMovements.Height - categoryMovementTitle.Height;
  grdCategoryMovements.Width = CategoryMovements.Width;
  NSB.ShowProgress("Loading...");
  rCnt = grdCategoryMovements.getRowCount();
  grdCategoryMovements.deleteRows(rCnt);
  grdCategoryMovements.refresh();
  $("#grdCategoryMovements td").css("font-family" , "helvetica");
  sqlList = [];
  sqlList[0] = ["SELECT * FROM [Category_Movement] ORDER BY [YearOn] DESC,AccountName;" , cmHandler, cmError];
  Sql(dbObj, sqlList);
}

function cmHandler(transaction, results) { savethefunction_rvar="";
  rCnt = 1;
 var  rec, imgID;
  for   (i = 0; i  <= (results.rows.length - 1); i ++) {
    rec = results.rows.item(i);
    grdCategoryMovements.addRows(1);
    grdCategoryMovements.setValue(rCnt,0,rec["YearOn"]);
    grdCategoryMovements.setValue(rCnt,1,rec["AccountName"]);

 //grdCategoryMovements.setValue(rCnt,4,FormatNumber(rec["ActualJan"],2))
 //grdCategoryMovements.setValue(rCnt,5,FormatNumber(rec["ActualFeb"],2))
 //grdCategoryMovements.setValue(rCnt,6,FormatNumber(rec["ActualMar"],2))
 //grdCategoryMovements.setValue(rCnt,7,FormatNumber(rec["ActualApr"],2))
 //grdCategoryMovements.setValue(rCnt,8,FormatNumber(rec["ActualMay"],2))
 //grdCategoryMovements.setValue(rCnt,9,FormatNumber(rec["ActualJun"],2))
 //grdCategoryMovements.setValue(rCnt,10,FormatNumber(rec["ActualJul"],2))
 //grdCategoryMovements.setValue(rCnt,11,FormatNumber(rec["ActualAug"],2))
 //grdCategoryMovements.setValue(rCnt,12,FormatNumber(rec["ActualSep"],2))
 //grdCategoryMovements.setValue(rCnt,13,FormatNumber(rec["ActualOct"],2))
 //grdCategoryMovements.setValue(rCnt,14,FormatNumber(rec["ActualNov"],2))
 //grdCategoryMovements.setValue(rCnt,15,FormatNumber(rec["ActualDec"],2))
    grdCategoryMovements.setValue(rCnt,2,FormatNumber(rec["Actual"],2));
    GridAddImageView(grdCategoryMovements,rCnt,3);
    GridAddImageChart(grdCategoryMovements,rCnt,4);
    rCnt = rCnt + 1;
  }
  GridSetHeight(grdCategoryMovements,"32px");
  GridCenterAlign(grdCategoryMovements,3,4);
  GridRightAlign(grdCategoryMovements,2,2);
  GridAlternateColor(grdCategoryMovements);

  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function cmError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

categoryMovementTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyReports);
	break;
  case ((choice) == "Refresh"):
    LoadCategoryMovements();
  }
return savethefunction_rvar; }

CategoryMovements.onshow = function() { savethefunction_rvar="";
  LoadCategoryMovements();
return savethefunction_rvar; }

grdCategoryMovements.onclick = function() { savethefunction_rvar="";
 var  gRowCol, gCol, gRow;
  gRowCol = Split(event.target.id, "_");
  gRow = gRowCol[1];
  gCol = gRowCol[2];
  catYear = grdCategoryMovements.getValue(gRow, 0);
  catName = grdCategoryMovements.getValue(gRow, 1);
  catKey = escape(catYear  +  "-"  +  catName);
  lblCatName.textContent = Replace(unescape(catKey), "-" , " : ");
  switch (True) {
  case ((gCol) == 4):
    catFrom = "catChart";
    ChangeForm(CategoryBudgets);
	break;
  case ((gCol) == 3):
    catFrom = "catMove";
    ChangeForm(CategoryBudgets);
  }
return savethefunction_rvar; }

window.addEventListener('load', function() {
  CategoryBudgets.style.display = 'block';
  NSB.addProperties(categoryBudgetsTitle);
  NSB.addDisableProperty(categoryBudgetsTitle);


  if(typeof(categoryBudgetsTitle.onclick)=='function'){
    if(typeof(categoryBudgetsTitle_left)!='undefined') categoryBudgetsTitle_left.onclick=function() {categoryBudgetsTitle.onclick(categoryBudgetsTitle_left.getAttribute('nsbvalue'))};
    if(typeof(categoryBudgetsTitle_right)!='undefined') categoryBudgetsTitle_right.onclick=function() {categoryBudgetsTitle.onclick(categoryBudgetsTitle_right.getAttribute('nsbvalue'))}};


  NSB.addProperties(lblCatName);
categoryYearlyChart_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
categoryYearlyChart.style.position='relative';
NSB.addProperties(categoryYearlyChart,categoryYearlyChart_wrapper);
  grdCategoryBudgets_ref = new iScroll('grdCategoryBudgets_scroller',{ bounce:true, zoom:false });
  grdCategoryBudgets.refresh=function(){setTimeout(NSB.refresh,100,grdCategoryBudgets_ref)};
  grdCategoryBudgets.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,grdCategoryBudgets)};
  NSB.Grid_init('grdCategoryBudgets');
  NSB.addProperties(grdCategoryBudgets,grdCategoryBudgets_scroller)
  CategoryBudgets.style.display = 'none';
}, false);
CategoryBudgets.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(CategoryBudgets);
function LoadCategoryBudgets() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  switch (True) {
  case ((catFrom) == "catMove"):
    $("#categoryBudgetsTitle h1").text("Category Budgets");
    grdCategoryBudgets.Left = 0;
    grdCategoryBudgets.Top = 75;
    grdCategoryBudgets.Height = CategoryBudgets.Height - 75;
    grdCategoryBudgets.Width = CategoryBudgets.Width;
    grdCategoryBudgets.Visible = True;
    categoryYearlyChart.Visible = False;
    rCnt = grdCategoryBudgets.getRowCount();
    grdCategoryBudgets.deleteRows(rCnt);
    grdCategoryBudgets.refresh();
    $("#grdCategoryBudgets td").css("font-family" , "helvetica");
	break;
  case ((catFrom) == "catChart"):
    $("#categoryBudgetsTitle h1").text("Category Chart");
    categoryYearlyChart.Left = 0;
    categoryYearlyChart.Top = 75;
    categoryYearlyChart.Height = CategoryBudgets.Height - 75;
    categoryYearlyChart.Width = CategoryBudgets.Width;
    grdCategoryBudgets.Visible = False;
    categoryYearlyChart.Visible = True;
  }
  sqlList = [];
  sqlList[0] = ["SELECT * FROM [Category_Movement] WHERE Id = '"  +  unescape(catKey)  +  "';" , cbHandler, cbError];
  Sql(dbObj, sqlList);
}

function cbHandler(transaction, results) { savethefunction_rvar="";
  catBudgetChart = [];
 var  sAmt1, sAmt2, sActual, sCostSplit, drow;
 var  mName;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    drow = results.rows.item(i);
    sActual = drow["Actual"];
    rCnt = 1;
    for   (y = 0; y  <= 11; y ++) {
      mName = MonthNames(y+1);
      switch (True) {
        case ((catFrom) == "catChart"):
         var  row;
          row = {}
          row["period"] = mName;
          row["budget"] = drow["Budget"  +  mName];
          row["actual"] = drow["Actual"  +  mName];
          catBudgetChart[y] = row;
	break;
      case ((catFrom) == "catMove"):
 // load grid
        sCostSplit = "0";
        sAmt1 = drow["Budget"  +  mName];
        sAmt2 = drow["Actual"  +  mName];
        if(sAmt2 == 0 || sActual == 0) {
 } else {
          sCostSplit = sAmt2 / sActual;
          sCostSplit = sCostSplit * 100;
        }
        sCostSplit = Round(sCostSplit)  +  "%";
        sAmt1 = FormatNumber(sAmt1,2);
        sAmt2 = FormatNumber(sAmt2,2);
        grdCategoryBudgets.addRows(1);
        grdCategoryBudgets.setValue(rCnt,0,mName);
        grdCategoryBudgets.setValue(rCnt,1,sAmt1);
        grdCategoryBudgets.setValue(rCnt,2,sAmt2);
        grdCategoryBudgets.setValue(rCnt,3,sCostSplit);
      }
      rCnt = rCnt + 1;
    }
    switch (True) {
    case ((catFrom) == "catMove"):
      sAmt1 = drow["Budget"];
      sAmt2 = drow["Actual"];
      sAmt1 = FormatNumber(sAmt1,2);
      sAmt2 = FormatNumber(sAmt2,2);
      grdCategoryBudgets.addRows(1);
      grdCategoryBudgets.setValue(rCnt,0,"Total");
      grdCategoryBudgets.setValue(rCnt,1,sAmt1);
      grdCategoryBudgets.setValue(rCnt,2,sAmt2);
      grdCategoryBudgets.setValue(rCnt,3,"");
      GridBoldRow(grdCategoryBudgets,rCnt);
    }
  }
  switch (True) {
    case ((catFrom) == "catMove"):
      GridSetHeight(grdCategoryBudgets,"32px");
      GridRightAlign(grdCategoryBudgets,1,3);
      GridAlternateColor(grdCategoryBudgets);
	break;
    case ((catFrom) == "catChart"):

 // define the chart
      categoryYearlyChart_settings.showBorderLine = False;
      categoryYearlyChart_settings.source = catBudgetChart;
      categoryYearlyChart_settings.categoryAxis={dataField:"period" , showGridLines:True,textRotationAngle:-90}
      categoryYearlyChart_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Amounts" , formatSettings: {prefix: "" , thousandsSeparator: ","}},  series:[  { dataField: "budget" , displayText: "Budget"},  { dataField: "actual" , displayText: "Actual"},  ]  }  ];
 //Render the chart.  
      $("#categoryYearlyChart").jqxChart(categoryYearlyChart_settings);
    }
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function cbError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

categoryBudgetsTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Chart"):
    catFrom = "catChart";
    LoadCategoryBudgets();
	break;
  case ((choice) == "Back"):
    switch (True) {
      case ((catFrom) == "catChart"):
        grdCategoryBudgets.Visible = True;
        categoryYearlyChart.Visible = False;
        grdCategoryBudgets.refresh();
        catFrom = "catMove";
	break;
      case ((catFrom) == "catMove"):
        ChangeForm(CategoryMovements);
	break;
    }
  }
return savethefunction_rvar; }

CategoryBudgets.onshow = function() { savethefunction_rvar="";
  lblCatName.Width = CategoryBudgets.Width;
  LoadCategoryBudgets();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  CategoryPerformance.style.display = 'block';
  NSB.addProperties(catPerformanceTitle);
  NSB.addDisableProperty(catPerformanceTitle);


  if(typeof(catPerformanceTitle.onclick)=='function'){
    if(typeof(catPerformanceTitle_left)!='undefined') catPerformanceTitle_left.onclick=function() {catPerformanceTitle.onclick(catPerformanceTitle_left.getAttribute('nsbvalue'))};
    if(typeof(catPerformanceTitle_right)!='undefined') catPerformanceTitle_right.onclick=function() {catPerformanceTitle.onclick(catPerformanceTitle_right.getAttribute('nsbvalue'))}};
catPerformanceChart_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
catPerformanceChart.style.position='relative';
NSB.addProperties(catPerformanceChart,catPerformanceChart_wrapper);
  CategoryPerformance.style.display = 'none';
}, false);
CategoryPerformance.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(CategoryPerformance);
function LoadCategoryPerformance() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  catPerformanceChart.Left = 0;
  catPerformanceChart.Top = catPerformanceTitle.Height;
  catPerformanceChart.Height = CategoryPerformance.Height - catPerformanceTitle.Height;
  catPerformanceChart.Width = CategoryPerformance.Width;
  NSB.ShowProgress("Loading...");
 var  sQRY;
  sqlList = [];
  sQRY = "SELECT AccountName, SUM(Actual) AS Actual FROM Category_Movement WHERE Actual > 0";
  sQRY = sQRY  +  " GROUP BY AccountName ORDER BY Actual DESC;";
  sqlList[0] = [sQRY, cpHandler, cpError];
  Sql(dbObj, sqlList);
}

function cpHandler(transaction, results) { savethefunction_rvar="";
  cmData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    if(i <= 9) {
     var  row;
      row = {}
      row["account"] = results.rows.item(i)["AccountName"];
      row["actual"] = results.rows.item(i)["Actual"];
      cmData[i] = row;
 } else {
       break;
    }
  }
 // define the chart

  catPerformanceChart_settings.showBorderLine = False;
  catPerformanceChart_settings.source = cmData;
  catPerformanceChart_settings.showLegend = False;
  catPerformanceChart_settings.categoryAxis={dataField:"account" , showGridLines:True, textRotationAngle:-90}
  catPerformanceChart_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Actual" , formatSettings: {prefix: "" , thousandsSeparator: ","}},  series:[  { dataField: "actual" , displayText: "Actual"},  ]  }  ];
  $("#catPerformanceChart").jqxChart(catPerformanceChart_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function cpError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }



catPerformanceTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyReports);
	break;
  case ((choice) == "Refresh"):
    LoadCategoryPerformance();
	break;
  case ((choice) == "Save"):
 // generate an image from the picture
      $("#catPerformanceChart").jqxChart("saveAsPNG" , "mms_categoryperformance.png");
  }
return savethefunction_rvar; }

CategoryPerformance.onshow = function() { savethefunction_rvar="";
  LoadCategoryPerformance();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  CategoryReport.style.display = 'block';
  NSB.addProperties(catReportTitle);
  NSB.addDisableProperty(catReportTitle);


  if(typeof(catReportTitle.onclick)=='function'){
    if(typeof(catReportTitle_left)!='undefined') catReportTitle_left.onclick=function() {catReportTitle.onclick(catReportTitle_left.getAttribute('nsbvalue'))};
    if(typeof(catReportTitle_right)!='undefined') catReportTitle_right.onclick=function() {catReportTitle.onclick(catReportTitle_right.getAttribute('nsbvalue'))}};
  grdCatReport_ref = new iScroll('grdCatReport_scroller',{ bounce:true, zoom:false });
  grdCatReport.refresh=function(){setTimeout(NSB.refresh,100,grdCatReport_ref)};
  grdCatReport.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,grdCatReport)};
  NSB.Grid_init('grdCatReport');
  NSB.addProperties(grdCatReport,grdCatReport_scroller)
  CategoryReport.style.display = 'none';
}, false);
CategoryReport.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(CategoryReport);
function LoadCategoryReport() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  grdCatReport.Left = 0;
  grdCatReport.Top = catReportTitle.Height;
  grdCatReport.Height = CategoryReport.Height - catReportTitle.Height;
  grdCatReport.Width = CategoryReport.Width;
  NSB.ShowProgress("Loading...");
  rCnt = grdCatReport.getRowCount();
  grdCatReport.deleteRows(rCnt);
  grdCatReport.refresh();
  $("#grdCatReport td").css("font-family" , "helvetica");
 var  sQRY;
  sqlList = [];
  sQRY = "SELECT AccountName, SUM(Actual) AS Actual FROM Category_Movement WHERE Actual > 0";
  sQRY = sQRY  +  " GROUP BY AccountName ORDER BY Actual DESC;";
  sqlList[0] = [sQRY, crepHandler, crepError];
  Sql(dbObj, sqlList);
}

 // define the grid data
function crepHandler(transaction, results) { savethefunction_rvar="";
  rCnt = 1;
 var  sAmt;
var  row;
var  sPerc;
var  cTotal;
  cTotal = 0;
 sPerc = 0;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    cTotal = cTotal + row["Actual"];
  }
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sAmt = row["Actual"];
    sPerc = sAmt / cTotal;
    sPerc = sPerc * 100;
    sAmt = FormatNumber(sAmt,2);
    sPerc = FormatNumber(sPerc,0);
    grdCatReport.addRows(1);
    grdCatReport.setValue(rCnt,0,row["AccountName"]);
    grdCatReport.setValue(rCnt,1,sAmt);
    grdCatReport.setValue(rCnt,2,sPerc  +  "%");
    rCnt = rCnt + 1;
  }
  GridSetHeight(grdCatReport,"32px");
  GridRightAlign(grdCatReport,1,2);
  GridAlternateColor(grdCatReport);

  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function crepError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

catReportTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyReports);
	break;
  case ((choice) == "Refresh"):
    LoadCategoryReport();
  }
return savethefunction_rvar; }

CategoryReport.onshow = function() { savethefunction_rvar="";
  LoadCategoryReport();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  AccountsList.style.display = 'block';
  NSB.addProperties(accListTitle);
  NSB.addDisableProperty(accListTitle);


  if(typeof(accListTitle.onclick)=='function'){
    if(typeof(accListTitle_left)!='undefined') accListTitle_left.onclick=function() {accListTitle.onclick(accListTitle_left.getAttribute('nsbvalue'))};
    if(typeof(accListTitle_right)!='undefined') accListTitle_right.onclick=function() {accListTitle.onclick(accListTitle_right.getAttribute('nsbvalue'))}};
  lstAccounts_ref = new iScroll('lstAccounts_scroller',{ bounce:true, zoom:false });
  lstAccounts.refresh=function(){setTimeout(NSB.refresh,100,lstAccounts_ref)};
  lstAccounts.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,lstAccounts)};
  NSB.Grid_init('lstAccounts');
  NSB.addProperties(lstAccounts,lstAccounts_scroller)
  AccountsList.style.display = 'none';
}, false);
AccountsList.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(AccountsList);
var  TypeOfList;

function LoadAccounts() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  lstAccounts.Left = 0;
  lstAccounts.Top = accListTitle.Height;
  lstAccounts.Height = AccountsList.Height - accListTitle.Height;
  lstAccounts.Width = AccountsList.Width;
  rCnt = lstAccounts.getRowCount();
  lstAccounts.deleteRows(rCnt);
  $("#lstAccounts td").css("font-family" , "helvetica");
  sqlList = [];
  switch (True) {
    case ((TypeOfList) == "all"):
      $("#accListTitle h1").text("Maintain Accounts");
      sqlList[0] = ["SELECT Id,[Name],CategoryName FROM Accounts ORDER BY [Name];" , accountsOk, accountsError];
	break;
    case ((TypeOfList) == "assets"):
      $("#accListTitle h1").text("Assets");
      sqlList[0] = ["SELECT Id,[Name],CategoryName FROM Accounts where TypeOf = 'Assets' ORDER BY [Name];" , accountsOk, accountsError];
	break;
    case ((TypeOfList) == "liabilities"):
      $("#accListTitle h1").text("Liabilities");
      sqlList[0] = ["SELECT Id,[Name],CategoryName FROM Accounts where TypeOf = 'Liabilities' ORDER BY [Name];" , accountsOk, accountsError];
	break;
    case ((TypeOfList) == "incomes"):
      $("#accListTitle h1").text("Incomes");
      sqlList[0] = ["SELECT Id,[Name],CategoryName FROM Accounts where TypeOf = 'Incomes' ORDER BY [Name];" , accountsOk, accountsError];
	break;
    case ((TypeOfList) == "expenses"):
      $("#accListTitle h1").text("Expenses");
      sqlList[0] = ["SELECT Id,[Name],CategoryName FROM Accounts where TypeOf = 'Expenses' ORDER BY [Name];" , accountsOk, accountsError];
  }
  Sql(dbObj, sqlList);
}

function accountsOk(transaction, results) { savethefunction_rvar="";
 var  row, sName, sCategoryName, sId, i;
  rCnt = 1;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sId = row["Id"];
    sName = row["Name"];
    sCategoryName = row["CategoryName"];
    lstAccounts.addRows(1);
    lstAccounts.setValue(rCnt,0,sName);
    lstAccounts.setValue(rCnt,1,sCategoryName);
    GridAddImageEdit(lstAccounts,rCnt,2);
    GridAddImagePayTo(lstAccounts,rCnt,3);
    GridAddImageDelete(lstAccounts,rCnt,4);

    rCnt = rCnt + 1;
  }
  GridSetHeight(lstAccounts,"32px");
  GridCenterAlign(lstAccounts,2,4);
  GridAlternateColor(lstAccounts);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function accountsError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

accListTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
      ChangeForm(MyAccounts);
	break;
  case ((choice) == "Add"):
      NextAccount();
  }
return savethefunction_rvar; }

function NextAccount() { savethefunction_rvar="";
  localStorage.setItem("action" , "addaccount");
  localStorage.setItem("account" , "");
  sqlList = [];
  sqlList[0] = ["SELECT MAX(Id) as MaxValue FROM [Accounts];" , NextAccountOk, NextAccountError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

 // generate the next available institution id result
function NextAccountOk(transaction, results) { savethefunction_rvar="";
  recid = results.rows.item(0)["MaxValue"];
  recid = recid + 1;
  isnew = True;
  ChangeForm(Account);
return savethefunction_rvar; }

 // generate next institution id error
function NextAccountError(transaction, results) { savethefunction_rvar="";
  recid = -1;
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

AccountsList.onshow = function() { savethefunction_rvar="";
  LoadAccounts();
return savethefunction_rvar; }

lstAccounts.onclick = function() { savethefunction_rvar="";
 var  gRowCol, gCol, gRow, gAccount;
  gRowCol = Split(event.target.id, "_");
  gRow = gRowCol[1];
  gCol = gRowCol[2];
  gAccount = lstAccounts.getValue(gRow, 0);
  localStorage.setItem("account" ,gAccount);
  switch (True) {
  case ((gCol) == 2):
 // edit
      localStorage.setItem("action" ,"readaccount");
      ChangeForm(Account);
	break;
  case ((gCol) == 3):
 // pay
      acctFrom = gAccount;
      catFrom = "accountsList";
      localStorage.setItem("action1" ,"");
      NextPayment();
	break;
  case ((gCol) == 4):
 // delete
      NSB.MsgBox(AccountDelete,"Do you want to delete this account?" , 4+32, "Confirm Delete");
  }
return savethefunction_rvar; }


function AccountDelete(result) {
  if(result != 6 )  { return; }
 var  delRec;
 delRec = new Object();
 var  delname;
 delname = localStorage.getItem("account");
  delname = InSingleQuote(delname);
  delRec["Name"]=delname;
  DeleteRecord("Accounts" , delRec);
  ResetAccounts();
  ResetMonthlySummary();
  LoadAccounts();
}


window.addEventListener('load', function() {
  AccountMovements.style.display = 'block';
  NSB.addProperties(accMovementTitle);
  NSB.addDisableProperty(accMovementTitle);


  if(typeof(accMovementTitle.onclick)=='function'){
    if(typeof(accMovementTitle_left)!='undefined') accMovementTitle_left.onclick=function() {accMovementTitle.onclick(accMovementTitle_left.getAttribute('nsbvalue'))};
    if(typeof(accMovementTitle_right)!='undefined') accMovementTitle_right.onclick=function() {accMovementTitle.onclick(accMovementTitle_right.getAttribute('nsbvalue'))}};
  grdAccountMovements_ref = new iScroll('grdAccountMovements_scroller',{ bounce:true, zoom:false });
  grdAccountMovements.refresh=function(){setTimeout(NSB.refresh,100,grdAccountMovements_ref)};
  grdAccountMovements.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,grdAccountMovements)};
  NSB.Grid_init('grdAccountMovements');
  NSB.addProperties(grdAccountMovements,grdAccountMovements_scroller)
  AccountMovements.style.display = 'none';
}, false);
AccountMovements.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(AccountMovements);
function LoadAccountMovements() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  grdAccountMovements.Left = 0;
  grdAccountMovements.Top = accMovementTitle.Height;
  grdAccountMovements.Height = AccountMovements.Height - accMovementTitle.Height;
  grdAccountMovements.Width = AccountMovements.Width;
  NSB.ShowProgress("Loading...");
  rCnt = grdAccountMovements.getRowCount();
  grdAccountMovements.deleteRows(rCnt);
  grdAccountMovements.refresh();
  $("#grdAccountMovements td").css("font-family" , "helvetica");
  sqlList = [];
  sqlList[0] = ["SELECT * FROM [Accounts_Movement] ORDER BY [YearOn] DESC,AccountName;" , amHandler, amError];
  Sql(dbObj, sqlList);
}

function amHandler(transaction, results) { savethefunction_rvar="";
  rCnt = 1;
 var  rec, i;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
 // load grid
    rec = results.rows.item(i);
    grdAccountMovements.addRows(1);
    grdAccountMovements.setValue(rCnt,0,rec["YearOn"]);
    grdAccountMovements.setValue(rCnt,1,rec["AccountName"]);
 //grdAccountMovements.setValue(rCnt,4,FormatNumber(rec["ActualJan"],2))
 //grdAccountMovements.setValue(rCnt,5,FormatNumber(rec["ActualFeb"],2))
 //grdAccountMovements.setValue(rCnt,6,FormatNumber(rec["ActualMar"],2))
 //grdAccountMovements.setValue(rCnt,7,FormatNumber(rec["ActualApr"],2))
 //grdAccountMovements.setValue(rCnt,8,FormatNumber(rec["ActualMay"],2))
 //grdAccountMovements.setValue(rCnt,9,FormatNumber(rec["ActualJun"],2))
 //grdAccountMovements.setValue(rCnt,10,FormatNumber(rec["ActualJul"],2))
 //grdAccountMovements.setValue(rCnt,11,FormatNumber(rec["ActualAug"],2))
 //grdAccountMovements.setValue(rCnt,12,FormatNumber(rec["ActualSep"],2))
 //grdAccountMovements.setValue(rCnt,13,FormatNumber(rec["ActualOct"],2))
 //grdAccountMovements.setValue(rCnt,14,FormatNumber(rec["ActualNov"],2))
 //grdAccountMovements.setValue(rCnt,15,FormatNumber(rec["ActualDec"],2))
    grdAccountMovements.setValue(rCnt,2,FormatNumber(rec["Actual"],2));
    GridAddImageEdit(grdAccountMovements,rCnt,3);
    GridAddImageDrillDown(grdAccountMovements,rCnt,4);
    GridAddImageView(grdAccountMovements,rCnt,5);
    GridAddImageChart(grdAccountMovements,rCnt,6);
    rCnt = rCnt + 1;
  }
  GridSetHeight(grdAccountMovements,"32px");
  GridCenterAlign(grdAccountMovements,3,6);
  GridRightAlign(grdAccountMovements,2,2);
  GridAlternateColor(grdAccountMovements);

  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function amError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

accMovementTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyReports);
	break;
  case ((choice) == "Refresh"):
    LoadAccountMovements();
  }
return savethefunction_rvar; }

AccountMovements.onshow = function() { savethefunction_rvar="";
  LoadAccountMovements();
return savethefunction_rvar; }

function grdAccountMovementsReady() { savethefunction_rvar="";
 //console.log("Grid load complete")
return savethefunction_rvar; }

grdAccountMovements.onclick = function() { savethefunction_rvar="";
 var  gRowCol, gCol, gRow;
  gRowCol = Split(event.target.id, "_");
  gRow = gRowCol[1];
  gCol = gRowCol[2];
  catYear = grdAccountMovements.getValue(gRow, 0);
  catName = grdAccountMovements.getValue(gRow, 1);
  catKey = escape(catYear  +  "-"  +  catName);
  lblAccName.textContent = Replace(unescape(catKey), "-" , " : ");
  switch (True) {
  case ((gCol) == 3):
 // edit
    localStorage.setItem("account" , catName);
    catFrom = "accountmovement";
    localStorage.setItem("action" ,"readaccount");
    ChangeForm(Account);
	break;
  case ((gCol) == 4):
 // drill down
    catFrom = "accountmovement";
    localStorage.setItem("payby" , "yearaccount");
    localStorage.setItem("payYear" , catYear);
    localStorage.setItem("account" , catName);
    ChangeForm(PaymentsReport);
	break;
  case ((gCol) == 6):
 // movement chart
    catFrom = "accChart";
    ChangeForm(AccountBudgets);
	break;
  case ((gCol) == 5):
 //movement breakdown
    catFrom = "accMove";
    ChangeForm(AccountBudgets);
  }
return savethefunction_rvar; }
window.addEventListener('load', function() {
  AccountBudgets.style.display = 'block';
  NSB.addProperties(accountBudgetsTitle);
  NSB.addDisableProperty(accountBudgetsTitle);


  if(typeof(accountBudgetsTitle.onclick)=='function'){
    if(typeof(accountBudgetsTitle_left)!='undefined') accountBudgetsTitle_left.onclick=function() {accountBudgetsTitle.onclick(accountBudgetsTitle_left.getAttribute('nsbvalue'))};
    if(typeof(accountBudgetsTitle_right)!='undefined') accountBudgetsTitle_right.onclick=function() {accountBudgetsTitle.onclick(accountBudgetsTitle_right.getAttribute('nsbvalue'))}};


  NSB.addProperties(lblAccName);
accountYearlyChart_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
accountYearlyChart.style.position='relative';
NSB.addProperties(accountYearlyChart,accountYearlyChart_wrapper);
  grdAccountBudgets_ref = new iScroll('grdAccountBudgets_scroller',{ bounce:true, zoom:false });
  grdAccountBudgets.refresh=function(){setTimeout(NSB.refresh,100,grdAccountBudgets_ref)};
  grdAccountBudgets.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,grdAccountBudgets)};
  NSB.Grid_init('grdAccountBudgets');
  NSB.addProperties(grdAccountBudgets,grdAccountBudgets_scroller)
  AccountBudgets.style.display = 'none';
}, false);
AccountBudgets.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(AccountBudgets);
var  accBudgetChart;

function LoadAccountBudgets() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  switch (True) {
  case ((catFrom) == "accChart"):
    $("#accountBudgetsTitle h1").text("Account Chart");
    accountYearlyChart.Left = 0;
    accountYearlyChart.Top = 75;
    accountYearlyChart.Height = AccountBudgets.Height - 75;
    accountYearlyChart.Width = AccountBudgets.Width;
    grdAccountBudgets.Visible = False;
    accountYearlyChart.Visible = True;
	break;
  case ((catFrom) == "accMove"):
    $("#accountBudgetsTitle h1").text("Account Budgets");
    grdAccountBudgets.Left = 0;
    grdAccountBudgets.Top = 75;
    grdAccountBudgets.Height = AccountBudgets.Height - 75;
    grdAccountBudgets.Width = AccountBudgets.Width;
    grdAccountBudgets.Visible = True;
    accountYearlyChart.Visible = False;
    rCnt = grdAccountBudgets.getRowCount();
    grdAccountBudgets.deleteRows(rCnt);
    grdAccountBudgets.refresh();
    $("#grdAccountBudgets td").css("font-family" , "helvetica");
  }
  sqlList = [];
  sqlList[0] = ["SELECT * FROM [Accounts_Movement] WHERE Id = '"  +  unescape(catKey)  +  "';" , abHandler, abError];
  Sql(dbObj, sqlList);
}

function abHandler(transaction, results) { savethefunction_rvar="";
  accBudgetChart = [];
 var  sAmt1, sAmt2, imgID, sActual, sCostSplit, drow, mName,i;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    drow = results.rows.item(i);
    sActual = drow["Actual"];
    rCnt = 1;
    for   (y = 0; y  <= 11; y ++) {
      mName = MonthNames(y+1);
      switch (True) {
      case ((catFrom) == "accChart"):
       var  row;
        row = {}
        row["period"] = mName;
        row["budget"] = drow["Budget"  +  mName];
        row["actual"] = drow["Actual"  +  mName];
        accBudgetChart[y] = row;
	break;
      case ((catFrom) == "accMove"):
 // load grid
        sCostSplit = "0";
        sAmt1= drow["Budget"  +  mName];
        sAmt2= drow["Actual"  +  mName];
        if(sAmt2 == 0 || sActual == 0) {
 } else {
          sCostSplit = sAmt2 / sActual;
          sCostSplit = sCostSplit * 100;
        }
        sCostSplit = Round(sCostSplit)  +  "%";
        sAmt2 = FormatNumber(sAmt2,2);
        sAmt1 = FormatNumber(sAmt1,2);
        grdAccountBudgets.addRows(1);
        grdAccountBudgets.setValue(rCnt,0,mName);
        grdAccountBudgets.setValue(rCnt,1,sAmt1);
        grdAccountBudgets.setValue(rCnt,2,sAmt2);
        grdAccountBudgets.setValue(rCnt,3,sCostSplit);
 // graph
 //imgID = "grdAccountBudgets_" & rCnt & "_3"
 //grdAccountBudgets.setValue(rCnt,3, "<img width=25px height=25px style=cursor:pointer src='chart.png' id='" & imgID & "'>")
      }
      rCnt = rCnt + 1;
    }
    switch (True) {
    case ((catFrom) == "accMove"):
      sAmt1= drow["Budget"];
      sAmt2= drow["Actual"];
      sAmt2 = FormatNumber(sAmt2,2);
      sAmt1 = FormatNumber(sAmt1,2);
      grdAccountBudgets.addRows(1);
      grdAccountBudgets.setValue(rCnt,0,"Total");
      grdAccountBudgets.setValue(rCnt,1,sAmt1);
      grdAccountBudgets.setValue(rCnt,2,sAmt2);
      grdAccountBudgets.setValue(rCnt,3,"");
      GridBoldRow(grdAccountBudgets,rCnt);
    }
  }
  switch (True) {
  case ((catFrom) == "accMove"):
    GridSetHeight(grdAccountBudgets,"32px");
    GridRightAlign(grdAccountBudgets,1,3);
    GridAlternateColor(grdAccountBudgets);

	break;
  case ((catFrom) == "accChart"):

 // define the chart
    accountYearlyChart_settings.showBorderLine = False;
    accountYearlyChart_settings.source = accBudgetChart;
    accountYearlyChart_settings.categoryAxis={dataField:"period" , showGridLines:True,textRotationAngle:-90}
    accountYearlyChart_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Amounts" , formatSettings: {prefix: "" , thousandsSeparator: ","}},  series:[  { dataField: "budget" , displayText: "Budget"},  { dataField: "actual" , displayText: "Actual"},  ]  }  ];
    $("#accountYearlyChart").jqxChart(accountYearlyChart_settings);
  }
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function abError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

accountBudgetsTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Chart"):
    catFrom = "accChart";
    LoadAccountBudgets();
	break;
  case ((choice) == "Back"):
    switch (True) {
      case ((catFrom) == "accChart"):
        grdAccountBudgets.Visible = True;
        accountYearlyChart.Visible = False;
        grdAccountBudgets.refresh();
        catFrom = "accMove";
	break;
      case ((catFrom) == "accMove"):
        ChangeForm(AccountMovements);
	break;
    }
  }
return savethefunction_rvar; }



AccountBudgets.onshow = function() { savethefunction_rvar="";
  lblAccName.Width = AccountBudgets.Width;
  LoadAccountBudgets();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  AccountPerformance.style.display = 'block';
  NSB.addProperties(accPerformanceTitle);
  NSB.addDisableProperty(accPerformanceTitle);


  if(typeof(accPerformanceTitle.onclick)=='function'){
    if(typeof(accPerformanceTitle_left)!='undefined') accPerformanceTitle_left.onclick=function() {accPerformanceTitle.onclick(accPerformanceTitle_left.getAttribute('nsbvalue'))};
    if(typeof(accPerformanceTitle_right)!='undefined') accPerformanceTitle_right.onclick=function() {accPerformanceTitle.onclick(accPerformanceTitle_right.getAttribute('nsbvalue'))}};
accPerformanceChart_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
accPerformanceChart.style.position='relative';
NSB.addProperties(accPerformanceChart,accPerformanceChart_wrapper);
  AccountPerformance.style.display = 'none';
}, false);
AccountPerformance.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(AccountPerformance);
function LoadAccountPerformance() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  accPerformanceChart.Left = 0;
  accPerformanceChart.Top = accPerformanceTitle.Height;
  accPerformanceChart.Height = AccountPerformance.Height - accPerformanceTitle.Height;
  accPerformanceChart.Width = AccountPerformance.Width;
  NSB.ShowProgress("Loading...");
 var  sQRY;
  sqlList = [];
  sQRY = "SELECT AccountName, SUM(Actual) AS Actual FROM Accounts_Movement WHERE Actual > 0";
  sQRY = sQRY  +  " GROUP BY AccountName ORDER BY Actual DESC;";
  sqlList[0] = [sQRY, apHandler, apError];
  Sql(dbObj, sqlList);
}

function apHandler(transaction, results) { savethefunction_rvar="";
  cmData = [];
 var  i;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    if(i <= 9) {
     var  row;
      row = {}
      row["account"] = results.rows.item(i)["AccountName"];
      row["actual"] = results.rows.item(i)["Actual"];
      cmData[i] = row;
 } else {
       break;
    }
  }
 // define the chart

  accPerformanceChart_settings.showBorderLine = False;
  accPerformanceChart_settings.source = cmData;
  accPerformanceChart_settings.showLegend = False;
  accPerformanceChart_settings.categoryAxis = {dataField:"account" ,  showGridLines:True, textRotationAngle:-90}
  accPerformanceChart_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Actual" , formatSettings: {prefix: "" , thousandsSeparator: ","}},  series:[{ dataField: "actual" , displayText: "Actual"}, ]  }  ];
  $("#accPerformanceChart").jqxChart(accPerformanceChart_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function apError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }



accPerformanceTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyReports);
	break;
  case ((choice) == "Refresh"):
    LoadAccountPerformance();
  }
return savethefunction_rvar; }

AccountPerformance.onshow = function() { savethefunction_rvar="";
  LoadAccountPerformance();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  AccountReport.style.display = 'block';
  NSB.addProperties(accReportTitle);
  NSB.addDisableProperty(accReportTitle);


  if(typeof(accReportTitle.onclick)=='function'){
    if(typeof(accReportTitle_left)!='undefined') accReportTitle_left.onclick=function() {accReportTitle.onclick(accReportTitle_left.getAttribute('nsbvalue'))};
    if(typeof(accReportTitle_right)!='undefined') accReportTitle_right.onclick=function() {accReportTitle.onclick(accReportTitle_right.getAttribute('nsbvalue'))}};
  grdAccReport_ref = new iScroll('grdAccReport_scroller',{ bounce:true, zoom:false });
  grdAccReport.refresh=function(){setTimeout(NSB.refresh,100,grdAccReport_ref)};
  grdAccReport.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,grdAccReport)};
  NSB.Grid_init('grdAccReport');
  NSB.addProperties(grdAccReport,grdAccReport_scroller)
  AccountReport.style.display = 'none';
}, false);
AccountReport.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(AccountReport);
function LoadAccountReport() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  grdAccReport.Left = 0;
  grdAccReport.Top = accReportTitle.Height;
  grdAccReport.Height = AccountReport.Height - accReportTitle.Height;
  grdAccReport.Width = AccountReport.Width;
  NSB.ShowProgress("Loading...");
  rCnt = grdAccReport.getRowCount();
  grdAccReport.deleteRows(rCnt);
  grdAccReport.refresh();
  $("#grdAccReport td").css("font-family" , "helvetica");
 var  sQRY;
  sqlList = [];
  sQRY = "SELECT AccountName, SUM(Actual) AS Actual FROM Accounts_Movement WHERE Actual > 0";
  sQRY = sQRY  +  " GROUP BY AccountName ORDER BY Actual DESC;";
  sqlList[0] = [sQRY, arepHandler, arepError];
  Sql(dbObj, sqlList);
}

function arepHandler(transaction, results) { savethefunction_rvar="";
  rCnt = 1;
 var  sAmt, row, sPerc, cTotal, i, saccount, sedit, sdrill;
  cTotal = 0;
 sPerc = 0;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    cTotal = cTotal + row["Actual"];
  }
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sAmt = row["Actual"];
    saccount = row["AccountName"];
    sPerc = sAmt / cTotal;
    sPerc = sPerc * 100;
    sAmt = FormatNumber(sAmt,2);
    sPerc = FormatNumber(sPerc,0);
    grdAccReport.addRows(1);
    grdAccReport.setValue(rCnt,0,saccount);
    grdAccReport.setValue(rCnt,1,sAmt);
    grdAccReport.setValue(rCnt,2,sPerc  +  "%");
    sedit = GridAddImageDefinitionAction(grdAccReport,"edit" ,saccount,"edit.png");
    sdrill = GridAddImageDefinitionAction(grdAccReport,"drill" ,saccount,"drill.png");
    grdAccReport.setValue(rCnt,3,sedit);
    grdAccReport.setValue(rCnt,4,sdrill);
    rCnt = rCnt + 1;
  }
  GridSetHeight(grdAccReport,"32px");
  GridRightAlign(grdAccReport,1,2);
  GridCenterAlign(grdAccReport,3,4);
  GridAlternateColor(grdAccReport);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function arepError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

accReportTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyReports);
	break;
  case ((choice) == "Refresh"):
    LoadAccountReport();
  }
return savethefunction_rvar; }

AccountReport.onshow = function() { savethefunction_rvar="";
  LoadAccountReport();
return savethefunction_rvar; }

grdAccReport.onclick = function() { savethefunction_rvar="";
 var  gRowCol, gCol, gRow;
  gRowCol = Split(event.target.id, "_");
  gRow = LCase(gRowCol[1] );
  gCol = gRowCol[2];
  localStorage.setItem("account" , gCol);
  switch (True) {
  case ((gRow) == "edit"):
 // edit
    catFrom = "accountreport";
    localStorage.setItem("action" ,"readaccount");
    ChangeForm(Account);
	break;
  case ((gRow) == "drill"):
    catFrom = "accountreport";
    localStorage.setItem("payby" , "account");
    ChangeForm(PaymentsReport);
  }
return savethefunction_rvar; }

window.addEventListener('load', function() {
  PaymentsReport.style.display = 'block';
  NSB.addProperties(paymentsTitle);
  NSB.addDisableProperty(paymentsTitle);


  if(typeof(paymentsTitle.onclick)=='function'){
    if(typeof(paymentsTitle_left)!='undefined') paymentsTitle_left.onclick=function() {paymentsTitle.onclick(paymentsTitle_left.getAttribute('nsbvalue'))};
    if(typeof(paymentsTitle_right)!='undefined') paymentsTitle_right.onclick=function() {paymentsTitle.onclick(paymentsTitle_right.getAttribute('nsbvalue'))}};
  grdPayments_ref = new iScroll('grdPayments_scroller',{ bounce:true, zoom:false });
  grdPayments.refresh=function(){setTimeout(NSB.refresh,100,grdPayments_ref)};
  grdPayments.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,grdPayments)};
  NSB.Grid_init('grdPayments');
  NSB.addProperties(grdPayments,grdPayments_scroller)
  PaymentsReport.style.display = 'none';
}, false);
PaymentsReport.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(PaymentsReport);
var  pTotal;
function LoadPayments() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  grdPayments.Left = 0;
  grdPayments.Top = paymentsTitle.Height;
  grdPayments.Height = PaymentsReport.Height - paymentsTitle.Height;
  grdPayments.Width = PaymentsReport.Width;
  NSB.ShowProgress("Loading...");
  rCnt = grdPayments.getRowCount();
  grdPayments.deleteRows(rCnt);
  $("#grdPayments td").css("font-family" , "helvetica");
  sqlList = [];
  sqlList[0] = ["DELETE FROM Payments WHERE Amount = 0;" , plReset, plError];
  payBy = localStorage.getItem("payby");
  switch (True) {
  case ((payBy) == "YearMonth"):
    payYear = localStorage.getItem("payYear");
    payMonth = localStorage.getItem("payMonth");
    $("#paymentsTitle h1").text("Payments: "  +  payYear  +  payMonth);
    sqlList[0] = ["SELECT SUM(Amount) AS Amount FROM Payments WHERE YearOn = "  +  payYear  +  " AND MonthOn = "  +  payMonth  +  ";" , pltHandler, pltError];
    sqlList[1] = ["SELECT * FROM Payments WHERE YearOn = "  +  payYear  +  " AND MonthOn = "  +  payMonth  +  " ORDER BY DayOn DESC,Id DESC;" , plHandler, plError];
	break;
  case ((payBy) == "account"):
    payAccount = localStorage.getItem("account");
    $("#paymentsTitle h1").text("Payments: "  +  payAccount);
    sqlList[0] = ["SELECT SUM(Amount) AS Amount FROM Payments WHERE FromAccount = '"  +  payAccount  +  "' OR ToAccount = '"  +  payAccount  +  "';" , pltHandler, pltError];
    sqlList[1] = ["SELECT * FROM [Payments] WHERE FromAccount = '"  +  payAccount  +  "' OR ToAccount = '"  +  payAccount  +  "' ORDER BY YearOn Desc, MonthOn Desc, DayOn Desc, Id Desc;" , plHandler, plError];
	break;
  case ((payBy) == "yearaccount"):
    payYear = localStorage.getItem("payYear");
    payAccount = localStorage.getItem("account");
    $("#paymentsTitle h1").text("Payments: "  +  payYear  +  "-"  +  payAccount);
    sqlList[0] = ["SELECT SUM(Amount) AS Amount FROM Payments WHERE YearOn = "  +  payYear  +  " AND (FromAccount = '"  +  payAccount  +  "' OR ToAccount = '"  +  payAccount  +  "');" , pltHandler, pltError];
    sqlList[1] = ["SELECT * FROM [Payments] WHERE YearOn = "  +  payYear  +  " AND (FromAccount = '"  +  payAccount  +  "' OR ToAccount = '"  +  payAccount  +  "') ORDER BY YearOn Desc, MonthOn Desc, DayOn Desc, Id Desc;" , plHandler, plError];
  }
  Sql(dbObj, sqlList);
}

function pltHandler(transaction, results) { savethefunction_rvar="";
 //console.log("add total")
  pTotal = results.rows.item(0)["Amount"];
  rCnt = 1;
 var  rowd;
 rowd = "Total;;;;"  +  FormatNumber(pTotal,2);
  GridAddNextRow(grdPayments,rowd,";");
return savethefunction_rvar; }

function pltError(transaction, results) { savethefunction_rvar="";
  pTotal = 0;
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

function plReset(transaction, results) { savethefunction_rvar="";
 //console.log("Payments deleted")
return savethefunction_rvar; }

function plHandler(transaction, results) { savethefunction_rvar="";
 //console.log("add rows")
  rCnt = rCnt + 1;
 var  sid,sfromaccount,stoaccount;
 var  sdayon,smonthon,syearon;
 var  sdescription,samount,sdate, rowd;
 var  i, nextrow;
  dailyPayments = new Object();
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sid = row["Id"];
    sfromaccount = row["FromAccount"];
    stoaccount = row["ToAccount"];
    sdayon = row["DayOn"];
    smonthon = row["MonthOn"];
    syearon = row["YearOn"];
    sdescription = row["Description"];
    samount = row["Amount"];
    samount = FormatNumber(samount, 2);
    if(Len(sdayon) == 1 ) { sdayon = "0"  +  sdayon; }
    if(Len(smonthon) == 1 ) { smonthon = "0"  +  smonthon; }
    sdate = syearon  +  "-"  +  smonthon  +  "-"  +  sdayon;
    rowd = sdate  +  VM  +  sfromaccount  +  VM  +  stoaccount  +  VM  +  sdescription  +  VM  +  samount;
    nextrow = grdPayments.getRowCount();
    rowd = rowd  +  VM  +  GridAddImageDefinitionAction(grdPayments,"edit" ,sid,"edit.png");
    rowd = rowd  +  VM  +  GridAddImageDefinitionAction(grdPayments,"duplicate" ,sid,"duplicate.png");
    rowd = rowd  +  VM  +  GridAddImageDefinitionAction(grdPayments,"reverse" ,sid,"reverse.png");
    rowd = rowd  +  VM  +  GridAddImageDefinitionAction(grdPayments,"delete" ,sid,"delete.png");
    GridAddNextRow(grdPayments,rowd,VM);
  }
  GridBoldRow(grdPayments,1);
  GridSetHeight(grdPayments,"32px");
  GridRightAlign(grdPayments,4,4);
  GridCenterAlign(grdPayments,5,8);
  GridAlternateColor(grdPayments);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function plError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

paymentsTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Refresh"):
    LoadPayments();
	break;
  case ((choice) == "Back"):
    switch (True) {
    case ((catFrom) == "accountmovement"):
      ChangeForm(AccountMovements);
	break;
    case ((catFrom) == "accountreport"):
      ChangeForm(AccountReport);
	break;
    default:
      ChangeForm(PaymentsSelector);
	break;
    }
  }
return savethefunction_rvar; }

PaymentsReport.onshow = function() { savethefunction_rvar="";
  LoadPayments();
return savethefunction_rvar; }

grdPayments.onclick = function() { savethefunction_rvar="";
 var  gRowCol, gCol, gRow;
  gRowCol = Split(event.target.id, "_");
  gRow = LCase(gRowCol[1] );
  gCol = gRowCol[2];
  localStorage.setItem("payment" ,gCol);
  localStorage.setItem("action" ,gRow);
  switch (True) {
  case ((gRow) == "edit"):
    localStorage.setItem("action1" ,"");
    catFrom = "paymentsreport";
    ChangeForm(PaymentsSingle);
	break;
  case ((gRow) == "delete"):
    NSB.MsgBox(PaymentDelete,"Are you sure that you want to delete this payment?" , 4+32, "Confirm Delete");
	break;
  case ((gRow) == "duplicate"):
    NSB.MsgBox(PaymentDuplicate,"Are you sure that you want to duplicate this payment?" , 4+32, "Confirm Duplicate");
	break;
  case ((gRow) == "reverse"):
    localStorage.setItem("action1" ,"reverse");
    NSB.MsgBox(PaymentReverse,"Are you sure that you want to reverse this payment?" , 4+32, "Confirm Reverse");
  }
return savethefunction_rvar; }

function PaymentDelete(result) {
  if(result != 6 )  { return; }
 var  delRec;
 delRec = new Object();
 var  delname;
 delname = localStorage.getItem("payment");
  delRec["Id"]=delname;
  DeleteRecord("Payments" , delRec);
  ResetAccounts();
  ResetMonthlySummary();
  LoadPayments();
}

function PaymentDuplicate(result) {
  if(result != 6 )  { return; }
  localStorage.setItem("action" ,"edit");
  localStorage.setItem("action1" ,"duplicate");
  catFrom = "paymentsreport";
  ChangeForm(PaymentsSingle);
}

function PaymentReverse(result) {
  if(result != 6 )  { return; }
  localStorage.setItem("action" ,"edit");
  localStorage.setItem("action1" ,"reverse");
  catFrom = "paymentsreport";
  ChangeForm(PaymentsSingle);
}

window.addEventListener('load', function() {
  PaymentsSelector.style.display = 'block';
  NSB.List_jqm_init('payPeriods','',true,'100%',false);
  payPeriods_ref = new iScroll('payPeriods_scroller',{ bounce:true, zoom:false });
  payPeriods.refresh=function(){if (typeof payPeriods_ref!='undefined') setTimeout(NSB.refresh,100,payPeriods_ref)};
  NSB.addProperties(payPeriods, payPeriods_scroller);

(function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('payPeriods_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  NSB.addProperties(payTitle);
  NSB.addDisableProperty(payTitle);


  if(typeof(payTitle.onclick)=='function'){
    if(typeof(payTitle_left)!='undefined') payTitle_left.onclick=function() {payTitle.onclick(payTitle_left.getAttribute('nsbvalue'))};
    if(typeof(payTitle_right)!='undefined') payTitle_right.onclick=function() {payTitle.onclick(payTitle_right.getAttribute('nsbvalue'))}};
  PaymentsSelector.style.display = 'none';
}, false);
PaymentsSelector.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(PaymentsSelector);
function LoadPayPeriods() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  payPeriods.deleteItem("all");
  payPeriods.Top = payTitle.Height;
  payPeriods.Height = PaymentsSelector.Height - payTitle.Height;
 //console.log(catFrom)
  switch (True) {
  case ((catFrom) == "historychart" ): case ((catFrom) == "payperyear" ): case ((catFrom) == "monthlyincomeexpenses" ): case ((catFrom) == "monthlycost2income"):
    sqlList = [];
    sqlList[0] = ["DELETE FROM Payments WHERE Amount = 0;" , ppReset, ppError];
    sqlList[1] = ["SELECT DISTINCT YearOn FROM Payments ORDER BY YearOn DESC;" , historychartH, historychartE];
	break;
  case ((catFrom) == "costmeasurements" ): case ((catFrom) == "monthlysummarychart" ): case ((catFrom) == "payreport" ): case ((catFrom) == "paypermonth"):
    sqlList = [];
    sqlList[0] = ["DELETE FROM Payments WHERE Amount = 0;" , ppReset, ppError];
    sqlList[1] = ["SELECT YearOn,MonthOn FROM Payments GROUP BY YearOn,MonthOn ORDER BY YearOn DESC,MonthOn DESC;" , ppHandler, ppError];
  }
  Sql(dbObj, sqlList);
}

function ppReset(transaction, result) { savethefunction_rvar="";
 //console.log("Payments deleted")
return savethefunction_rvar; }

function historychartH(transaction, results) { savethefunction_rvar="";
 var  row, sYearOn, i;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sYearOn = row["YearOn"];
    payPeriods.addItem(sYearOn);
  }
  payPeriods.refresh();
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function historychartE(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ppHandler(transaction, results) { savethefunction_rvar="";
 var  row, sYearOn, sMonthOn, i;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sMonthOn = row["MonthOn"];
    sYearOn = row["YearOn"];
    if(Len(sMonthOn)== 1 ) { sMonthOn = "0"  +  sMonthOn; }
    payPeriods.addItem(sYearOn  +  ":"  +  sMonthOn);
  }
  payPeriods.refresh();
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ppError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

payPeriods.onclick = function(i) { savethefunction_rvar="";
  if(TypeName(i) == "object" )  { return savethefunction_rvar; }
 var  strItem, strYM;
  strItem = payPeriods.getItem(i);
  switch (True) {
  case ((catFrom) == "payperyear" ): case ((catFrom) == "historychart" ): case ((catFrom) ==  "monthlyincomeexpenses" ): case ((catFrom) ==  "monthlycost2income"):
    localStorage.setItem("payby" , "Year");
    localStorage.setItem("payYear" , strItem);
    switch (True) {
    case ((catFrom) == "monthlycost2income"):
      ChangeForm(Cost2Income);
	break;
    case ((catFrom) == "payperyear"):
      ChangeForm(PaymentsYearsChart);
	break;
    case ((catFrom) == "historychart"):
      ChangeForm(HistoryChart);
	break;
    case ((catFrom) == "monthlyincomeexpenses"):
      ChangeForm(IEChart);
	break;
    }
	break;
  case ((catFrom) == "costmeasurements" ): case ((catFrom) == "monthlysummarychart" ): case ((catFrom) == "payreport" ): case ((catFrom) == "paypermonth"):
    strYM = Split(strItem,":");
    payYear = Trim(strYM[0] );
    payMonth = Trim(strYM[1] );
    localStorage.setItem("payby" , "YearMonth");
    localStorage.setItem("payYear" , payYear);
    localStorage.setItem("payMonth" , payMonth);
    switch (True) {
    case ((catFrom) == "monthlysummarychart"):
      ChangeForm(MonthlySummaryChart);
	break;
    case ((catFrom) == "costmeasurements"):
      ChangeForm(MonthlySummary);
	break;
    case ((catFrom) == "payreport"):
      ChangeForm(PaymentsReport);
	break;
    case ((catFrom) == "paypermonth"):
      ChangeForm(PaymentsYearsChart);
	break;
    }
  }
return savethefunction_rvar; }

payTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
    case ((choice) == "Back"):
      switch (True) {
      case ((catFrom) == "costmeasurements" ): case ((catFrom) == "monthlysummarychart" ): case ((catFrom) == "historychart" ): case ((catFrom) == "monthlyincomeexpenses" ): case ((catFrom) == "monthlycost2income"):
        ChangeForm(MyReports);
	break;
      default:
        ChangeForm(MyReports);
	break;
      }
  }
return savethefunction_rvar; }

PaymentsSelector.onshow = function() { savethefunction_rvar="";
  LoadPayPeriods();
return savethefunction_rvar; }


window.addEventListener('load', function() {
  FinancialReport.style.display = 'block';
  NSB.addProperties(finReportTitle);
  NSB.addDisableProperty(finReportTitle);


  if(typeof(finReportTitle.onclick)=='function'){
    if(typeof(finReportTitle_left)!='undefined') finReportTitle_left.onclick=function() {finReportTitle.onclick(finReportTitle_left.getAttribute('nsbvalue'))};
    if(typeof(finReportTitle_right)!='undefined') finReportTitle_right.onclick=function() {finReportTitle.onclick(finReportTitle_right.getAttribute('nsbvalue'))}};
  grdFinReport_ref = new iScroll('grdFinReport_scroller',{ bounce:true, zoom:false });
  grdFinReport.refresh=function(){setTimeout(NSB.refresh,100,grdFinReport_ref)};
  grdFinReport.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,grdFinReport)};
  NSB.Grid_init('grdFinReport');
  NSB.addProperties(grdFinReport,grdFinReport_scroller)
  FinancialReport.style.display = 'none';
}, false);
FinancialReport.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(FinancialReport);
var  tAssets,tLiabilities;
var  tIncomes,tExpenses;
var  aAssets,aLiabilities;
var  aIncomes,aExpenses;
var  sLine, aTot, lTot, eTot, iTot, rTot, xLine;

function LoadFinancialReport() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  grdFinReport.Left = 0;
  grdFinReport.Top = finReportTitle.Height;
  grdFinReport.Height = FinancialReport.Height - finReportTitle.Height;
  grdFinReport.Width = FinancialReport.Width;
  NSB.ShowProgress("Loading...");
  rCnt = grdFinReport.getRowCount();
  grdFinReport.deleteRows(rCnt);
  grdFinReport.refresh();
  $("#grdFinReport td").css("font-family" , "helvetica");
  sqlList = [];
  sqlList[0] = ["SELECT [Name],[TypeOf],[CurrentBalance] FROM Accounts WHERE CurrentBalance <> 0 ORDER BY TypeOf,[Name];" , finrepHandler, finrepError];
  Sql(dbObj, sqlList);
}

function finrepHandler(transaction, results) { savethefunction_rvar="";
  rCnt = 1;
  tAssets=0;
  tLiabilities=0;
  tIncomes=0;
  tExpenses=0;
  aAssets=createMultiDimArray('0');
  aLiabilities=createMultiDimArray('0');
  aIncomes=createMultiDimArray('0');
  aExpenses=createMultiDimArray('0');
 var  sTypeOf, sCurrentBalance, sName;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sTypeOf = row["TypeOf"];
    sCurrentBalance = row["CurrentBalance"];
    sName = row["Name"];
    if(parseFloat(sCurrentBalance) < 0 && sTypeOf == "Assets" ) { sTypeOf = "Liabilities"; }
    if(parseFloat(sCurrentBalance) > 0 && sTypeOf == "Liabilities" ) { sTypeOf = "Assets"; }
    sLine = sTypeOf  +  VM  +  sName  +  VM  +  sCurrentBalance;
    switch (True) {
    case ((sTypeOf) == "Assets"):
      tAssets = tAssets + sCurrentBalance;
      aTot = UBound(aAssets)+1;

      aAssets[aTot] = sLine;
	break;
    case ((sTypeOf) == "Liabilities"):
      tLiabilities = tLiabilities + sCurrentBalance;
      lTot = UBound(aLiabilities)+1;

      aLiabilities[lTot] = sLine;
	break;
    case ((sTypeOf) == "Incomes"):
      tIncomes = tIncomes + sCurrentBalance;
      iTot = UBound(aIncomes)+1;

      aIncomes[iTot] = sLine;
	break;
    case ((sTypeOf) == "Expenses"):
      tExpenses = tExpenses + sCurrentBalance;
      eTot = UBound(aExpenses)+1;

      aExpenses[eTot] = sLine;
    }
  }
 // add assets
  rCnt = 1;
  AddFinReportRow(rCnt,"Assets" ,"" ,tAssets);
  GridBoldRow(grdFinReport,rCnt);
  aTot = UBound(aAssets);
  if(aTot == 0 ) { aTot = 1; }
  for   (i = 0; i  <= aTot-1; i ++) {
    sLine = aAssets[i];
    if(Len(sLine) > 0) {
      xLine = Split(sLine,VM);
      rCnt = rCnt + 1;
      AddFinReportRow(rCnt,"" ,xLine[1] ,xLine[2] );
    }
  }
 // add liabilities
  rCnt = rCnt + 1;
  AddFinReportRow(rCnt,"Liabilities" ,"" ,tLiabilities);
  GridBoldRow(grdFinReport,rCnt);
  lTot = UBound(aLiabilities);
  if(lTot == 0 ) { lTot = 1; }
  for   (i = 0; i  <= lTot-1; i ++) {
    sLine = aLiabilities[i];
    if(Len(sLine) > 0) {
      xLine = Split(sLine,VM);
      rCnt = rCnt + 1;
      AddFinReportRow(rCnt,"" ,xLine[1] ,xLine[2] );
    }
  }
 // add incomes
  rCnt = rCnt + 1;
  AddFinReportRow(rCnt,"Incomes" ,"" ,tIncomes);
  GridBoldRow(grdFinReport,rCnt);
  iTot = UBound(aIncomes);
  if(iTot == 0 ) { iTot = 1; }
  for   (i = 0; i  <= iTot - 1; i ++) {
    sLine = aIncomes[i];
    if(Len(sLine) > 0) {
      xLine = Split(sLine,VM);
      rCnt = rCnt + 1;
      AddFinReportRow(rCnt,"" ,xLine[1] ,xLine[2] );
    }
  }
 // add expenses
  rCnt = rCnt + 1;
  AddFinReportRow(rCnt,"Expenses" ,"" ,tExpenses);
  GridBoldRow(grdFinReport,rCnt);
  eTot = UBound(aExpenses);
  if(eTot == 0 ) { eTot = 1; }
  for   (i = 0; i  <= eTot-1; i ++) {
    sLine = aExpenses[i];
    if(Len(sLine) > 0) {
      xLine = Split(sLine,VM);
      rCnt = rCnt + 1;
      AddFinReportRow(rCnt,"" ,xLine[1] ,xLine[2] );
    }
  }
  GridSetHeight(grdFinReport,"32px");
  GridRightAlign(grdFinReport,2,2);
  GridAlternateColor(grdFinReport);

  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function AddFinReportRow(rowPos,xTypeOf,xName,xAmount) {
  grdFinReport.addRows(1);
  grdFinReport.setValue(rowPos,0,xTypeOf);
  grdFinReport.setValue(rowPos,1,xName);
  grdFinReport.setValue(rowPos,2,FormatNumber(xAmount,2));
}

function finrepError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

finReportTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyReports);
	break;
  case ((choice) == "Refresh"):
    LoadFinancialReport();
  }
return savethefunction_rvar; }

FinancialReport.onshow = function() { savethefunction_rvar="";
  LoadFinancialReport();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  Charts.style.display = 'block';
  NSB.addProperties(chartsTitle);
  NSB.addDisableProperty(chartsTitle);


  if(typeof(chartsTitle.onclick)=='function'){
    if(typeof(chartsTitle_left)!='undefined') chartsTitle_left.onclick=function() {chartsTitle.onclick(chartsTitle_left.getAttribute('nsbvalue'))};
    if(typeof(chartsTitle_right)!='undefined') chartsTitle_right.onclick=function() {chartsTitle.onclick(chartsTitle_right.getAttribute('nsbvalue'))}};
chartObj_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
chartObj.style.position='relative';
NSB.addProperties(chartObj,chartObj_wrapper);
  Charts.style.display = 'none';
}, false);
Charts.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Charts);
var  chartTitle;
function LoadCharts() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  chartObj.Left = 0;
  chartObj.Top = chartsTitle.Height;
  chartObj.Height = Charts.Height - chartsTitle.Height;
  chartObj.Width = Charts.Width;
  NSB.ShowProgress("Loading...");
  sqlList = [];
  chartPer = LCase(chartPer);
  switch (True) {
    case ((chartPer) == "al"):
      chartTitle = "Assets vs Liabilities";
      $("#chartsTitle h1").text(chartTitle);
      Query = "SELECT [TypeOf],[CurrentBalance] FROM Accounts WHERE CurrentBalance <> 0 AND TypeOf IN ('Assets','Liabilities');";
	break;
    case ((chartPer) == "ie"):
      chartTitle = "Incomes vs Expenses";
      $("#chartsTitle h1").text(chartTitle);
      Query = "SELECT [TypeOf],[CurrentBalance] FROM Accounts WHERE CurrentBalance <> 0 AND TypeOf IN ('Incomes','Expenses');";
    }
    sqlList[0] = [Query,chartHandler, chartError];
    Sql(dbObj, sqlList);
}

function chartHandler(transaction, results) { savethefunction_rvar="";
 var  tAssets,tLiabilities;
 var  tIncomes,tExpenses,row;
  tAssets=0;
tLiabilities=0;
  tIncomes=0;
tExpenses=0;
  cmData = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sTypeOf = row["TypeOf"];
    sCurrentBalance = row["CurrentBalance"];
    if(parseFloat(sCurrentBalance) < 0 && sTypeOf == "Assets" ) { sTypeOf = "Liabilities"; }
    if(parseFloat(sCurrentBalance) > 0 && sTypeOf == "Liabilities" ) { sTypeOf = "Assets"; }
    switch (True) {
    case ((sTypeOf) == "Assets"):
      tAssets = tAssets + sCurrentBalance;
	break;
    case ((sTypeOf) == "Liabilities"):
      tLiabilities = tLiabilities + sCurrentBalance;
	break;
    case ((sTypeOf) == "Incomes"):
      tIncomes = tIncomes + sCurrentBalance;
	break;
    case ((sTypeOf) == "Expenses"):
      tExpenses = tExpenses + sCurrentBalance;
    }
  }
  switch (True) {
  case ((chartPer) == "al"):
    tLiabilities = tLiabilities * (0-1);
    row = {}
    row["Name"] = "Assets";
    row["Value"] = tAssets;
    cmData[0] = row;
    row = {}
    row["Name"] = "Liabilities";
    row["Value"] = tLiabilities;
    cmData[1] = row;
	break;
  case ((chartPer) == "ie"):
    tIncomes = tIncomes * (0-1);
    row = {}
    row["Name"] = "Incomes";
    row["Value"] = tIncomes;
    cmData[0] = row;
    row = {}
    row["Name"] = "Expenses";
    row["Value"] = tExpenses;
    cmData[1] = row;
  }
 // define the chart
 //chartObj_settings.title = chartTitle
 //chartObj_settings.description = chartTitle
  chartObj_settings.showBorderLine = False;
  chartObj_settings.source = cmData;
  chartObj_settings.showLegend = True;
  chartObj_settings.colorScheme = "scheme03";
  chartObj_settings.seriesGroups = [  {  type: "pie" , showLabels: True,  series:[{ dataField: "Value" ,  labelRadius: 100, initialAngle: 15, centerOffset: 0,  formatSettings: {prefix: "" , thousandsSeparator: ","}, displayText: "Name"},]  }  ];
  $("#chartObj").jqxChart(chartObj_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function chartError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

chartsTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyReports);
  }
return savethefunction_rvar; }

Charts.onshow = function() { savethefunction_rvar="";

  LoadCharts();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  PaymentsYearsChart.style.display = 'block';
  NSB.addProperties(payYearChartTitle);
  NSB.addDisableProperty(payYearChartTitle);


  if(typeof(payYearChartTitle.onclick)=='function'){
    if(typeof(payYearChartTitle_left)!='undefined') payYearChartTitle_left.onclick=function() {payYearChartTitle.onclick(payYearChartTitle_left.getAttribute('nsbvalue'))};
    if(typeof(payYearChartTitle_right)!='undefined') payYearChartTitle_right.onclick=function() {payYearChartTitle.onclick(payYearChartTitle_right.getAttribute('nsbvalue'))}};
payYearChart_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
payYearChart.style.position='relative';
NSB.addProperties(payYearChart,payYearChart_wrapper);
  PaymentsYearsChart.style.display = 'none';
}, false);
PaymentsYearsChart.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(PaymentsYearsChart);
function PlotPaymentsYears() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  payBy = localStorage.getItem("payby");
  payYearChart.Left = 0;
  payYearChart.Top = payYearChartTitle.Height;
  payYearChart.Height = PaymentsYearsChart.Height - payYearChartTitle.Height;
  payYearChart.Width = PaymentsYearsChart.Width;
  switch (True) {
  case ((payBy) == "YearMonth"):
    NSB.ShowProgress("Loading...");
    payYear = localStorage.getItem("payYear");
    payMonth = localStorage.getItem("payMonth");
    chartTitle = "Payments:"  +  payYear  +  payMonth;
    $("#payYearChartTitle h1").text(chartTitle);
    Query = "SELECT DayOn,SUM(Amount) As Amount FROM Payments WHERE YearOn = ";
    Query = Query  +  payYear  +  " AND MonthOn = "  +  payMonth  +  " GROUP BY DayOn ORDER BY DayOn;";
    sqlList = [];
    sqlList[0] = [Query, pyHandler, pyError];
    Sql(dbObj, sqlList);
	break;
  case ((payBy) == "Year"):
    NSB.ShowProgress("Loading...");
    payYear = localStorage.getItem("payYear");
    chartTitle = "Payments:"  +  payYear;
    $("#payYearChartTitle h1").text(chartTitle);
    Query = "SELECT MonthOn,SUM(Amount) As Amount FROM Payments WHERE YearOn = ";
    Query = Query  +  payYear  +  " GROUP BY MonthOn ORDER BY MonthOn;";
    sqlList = [];
    sqlList[0] = [Query, pyHandler, pyError];
    Sql(dbObj, sqlList);
  }
}

function pyHandler(transaction, results) { savethefunction_rvar="";
  cmData = [];
 var  sMonthOn, sAmount, row, drow;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    drow = results.rows.item(i);
    switch (True) {
    case ((payBy) == "YearMonth"):
      sMonthOn = drow["DayOn"];
      sAmount = drow["Amount"];
      if(Len(sMonthOn) == 1 ) { sMonthOn = "0"  +  sMonthOn; }
      row = {}
      row["period"] = payYear  +  "-"  +  payMonth  +  "-"  +  sMonthOn;
      row["amount"] = sAmount;
      cmData[i] = row;
	break;
    case ((payBy) == "Year"):
      sMonthOn = drow["MonthOn"];
      sAmount = drow["Amount"];
      sMonthOn = MonthNames(sMonthOn);
      row = {}
      row["period"] = payYear  +  "-"  +  sMonthOn;
      row["amount"] = sAmount;
      cmData[i] = row;
    }
  }
 // define the chart

  payYearChart_settings.showBorderLine = False;
  payYearChart_settings.source = cmData;
  payYearChart_settings.showLegend = False;
  payYearChart_settings.colorScheme = "scheme04";
  payYearChart_settings.categoryAxis={dataField:"period" , textRotationAngle:-90,showGridLines:True, showTickMarks: True,valuesOnTicks: True}
  payYearChart_settings.seriesGroups = [  {  type: "area" ,  valueAxis:  {description: "Amount" , tickMarksColor: "#888888" , axisSize: "auto" ,displayValueAxis: True, formatSettings: {prefix: "" , thousandsSeparator: ","}},  series:[  { dataField: "amount" , displayText: "Amount"},  ]  }  ];
  $("#payYearChart").jqxChart(payYearChart_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function pyError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }


payYearChartTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(PaymentsSelector);
	break;
  case ((choice) == "Refresh"):
    PlotPaymentsYears();
	break;
  case ((choice) == "Save"):
 // generate an image from the picture
      $("#payYearChart").jqxChart("saveAsPNG" , "mms_paymentspermonth.png");
  }
return savethefunction_rvar; }

PaymentsYearsChart.onshow = function() { savethefunction_rvar="";
  PlotPaymentsYears();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  MaintainInstitutions.style.display = 'block';
  NSB.addProperties(institutionEditorT);
  NSB.addDisableProperty(institutionEditorT);


  if(typeof(institutionEditorT.onclick)=='function'){
    if(typeof(institutionEditorT_left)!='undefined') institutionEditorT_left.onclick=function() {institutionEditorT.onclick(institutionEditorT_left.getAttribute('nsbvalue'))};
    if(typeof(institutionEditorT_right)!='undefined') institutionEditorT_right.onclick=function() {institutionEditorT.onclick(institutionEditorT_right.getAttribute('nsbvalue'))}};


  NSB.MultiInput_init('institutionEditorI');

  NSB.addProperties(institutionEditorI);
  MaintainInstitutions.style.display = 'none';
}, false);
MaintainInstitutions.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(MaintainInstitutions);
MaintainInstitutions.onshow = function() { savethefunction_rvar="";
  institutionEditorI.Left = 0;
  institutionEditorI.Top = 42;
  institutionEditorI.Width = MaintainInstitutions.Width - 20;
  ReadInstitutionS();
return savethefunction_rvar; }

institutionEditorT.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Save"):
    SaveInstitutionS();
	break;
  case ((choice) == "Back"):
    ChangeForm(MyInstitutions);
  }
return savethefunction_rvar; }

function ReadInstitutionS() { savethefunction_rvar="";
   var  svalue, skey;
    svalue = localStorage.getItem("id");
    if(IsNull(svalue) == True) {
      institutionEditorI.setValue(1,"");
 } else {
      skey = "Institutions*"  +  svalue;
      svalue = localStorage.getItem(skey);
      institutionEditorI.setValue(1,svalue);
    }
return savethefunction_rvar; }

function SaveInstitutionS() { savethefunction_rvar="";
 var  snew;
 // check if old value = new value
  snew = institutionEditorI.getValue(1);
  snew = Trim(snew);
  if(Len(snew) == 0) {
    NSB.MsgBox("The institution name cannot be blank, enter an institution name please.");
     return;
  }
 var  sid, saction;
  sid = localStorage.getItem("id");
  saction = localStorage.getItem("action");
  snew = Replace(snew,"'" ,"''");
  snew = InSingleQuote(snew);
 var  nrecord;
 nrecord = new Object();
  nrecord["Id"]=sid;
  nrecord["Name"]=snew;
  switch (True) {
  case ((saction) == "new"):
    InsertRecord("Institutions" ,nrecord);
	break;
  default:
   var  nwhere;
 nwhere = new Object();
    nwhere["Id"]=sid;
    UpdateRecord("Institutions" ,nrecord,nwhere);
  }
}
window.addEventListener('load', function() {
  FinancialPosition.style.display = 'block';
  NSB.addProperties(finposTitle);
  NSB.addDisableProperty(finposTitle);


  if(typeof(finposTitle.onclick)=='function'){
    if(typeof(finposTitle_left)!='undefined') finposTitle_left.onclick=function() {finposTitle.onclick(finposTitle_left.getAttribute('nsbvalue'))};
    if(typeof(finposTitle_right)!='undefined') finposTitle_right.onclick=function() {finposTitle.onclick(finposTitle_right.getAttribute('nsbvalue'))}};
  grdFinPosition_ref = new iScroll('grdFinPosition_scroller',{ bounce:true, zoom:false });
  grdFinPosition.refresh=function(){setTimeout(NSB.refresh,100,grdFinPosition_ref)};
  grdFinPosition.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,grdFinPosition)};
  NSB.Grid_init('grdFinPosition');
  NSB.addProperties(grdFinPosition,grdFinPosition_scroller)
  FinancialPosition.style.display = 'none';
}, false);
FinancialPosition.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(FinancialPosition);
var  fpAssets,fpLiabilities;
var  fpIncomes,fpExpenses;

function LoadFinancialPosition() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  grdFinPosition.Left = 0;
  grdFinPosition.Top = finposTitle.Height;
  grdFinPosition.Height = FinancialPosition.Height - finposTitle.Height;
  grdFinPosition.Width = FinancialPosition.Width;
  NSB.ShowProgress("Loading...");
  rCnt = grdFinPosition.getRowCount();
  grdFinPosition.deleteRows(rCnt);
  grdFinPosition.refresh();
  $("#grdFinPosition td").css("font-family" , "helvetica");
  sqlList = [];
  sqlList[0] = ["SELECT [TypeOf],[CurrentBalance] FROM Accounts WHERE CurrentBalance <> 0 ORDER BY TypeOf,[Name];" , finposHandler, finposError];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function finposHandler(transaction, results) { savethefunction_rvar="";
  rCnt = 1;
  fpAssets=0;
  fpLiabilities=0;
  fpIncomes=0;
  fpExpenses=0;
 var  sTypeOf, sCurrentBalance, di, nw;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sTypeOf = row["TypeOf"];
    sCurrentBalance = row["CurrentBalance"];
    if(parseFloat(sCurrentBalance) < 0 && sTypeOf == "Assets" ) { sTypeOf = "Liabilities"; }
    if(parseFloat(sCurrentBalance) > 0 && sTypeOf == "Liabilities" ) { sTypeOf = "Assets"; }
    switch (True) {
    case ((sTypeOf) == "Assets"):
      fpAssets = fpAssets + sCurrentBalance;
	break;
    case ((sTypeOf) == "Liabilities"):
      fpLiabilities = fpLiabilities + sCurrentBalance;
	break;
    case ((sTypeOf) == "Incomes"):
      fpIncomes = fpIncomes + sCurrentBalance;
	break;
    case ((sTypeOf) == "Expenses"):
      fpExpenses = fpExpenses + sCurrentBalance;
    }
  }
 // do calculations
  fpIncomes = fpIncomes * (0-1);
  fpLiabilities = fpLiabilities * (0-1);
  di = fpIncomes - fpExpenses;
  nw = fpAssets - fpLiabilities;
 // add net worth
  rCnt = 1;
  AddFinPositionRow(rCnt,"Net Worth" ,"Assets less Liabilities" ,nw);
  GridBoldRow(grdFinPosition,rCnt);
  rCnt = rCnt + 1;
  AddFinPositionRow(rCnt,"" ,"Assets" ,fpAssets);
  rCnt = rCnt + 1;
  AddFinPositionRow(rCnt,"" ,"Liabilities" , fpLiabilities);
 // add disposable income
  rCnt = rCnt + 1;
  AddFinPositionRow(rCnt,"Disposable Income" ,"Incomes less Expenes" ,di);
  GridBoldRow(grdFinPosition,rCnt);
  rCnt = rCnt + 1;
  AddFinPositionRow(rCnt,"" ,"Incomes" ,fpIncomes);
  rCnt = rCnt + 1;
  AddFinPositionRow(rCnt,"" ,"Expenses" , fpExpenses);
  GridSetHeight(grdFinPosition,"32px");
  GridRightAlign(grdFinPosition,2,2);
  GridAlternateColor(grdFinPosition);

  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function AddFinPositionRow(rowPos,xTypeOf,xName,xAmount) {
  grdFinPosition.addRows(1);
  grdFinPosition.setValue(rowPos,0,xTypeOf);
  grdFinPosition.setValue(rowPos,1,xName);
  grdFinPosition.setValue(rowPos,2,FormatNumber(xAmount,2));
}

function finposError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

finposTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(MyReports);
	break;
  case ((choice) == "Refresh"):
    LoadFinancialPosition();
  }
return savethefunction_rvar; }

FinancialPosition.onshow = function() { savethefunction_rvar="";
  LoadFinancialPosition();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  PaymentsSingle.style.display = 'block';


  NSB.MultiInput_init('MultiInput1');

  NSB.addProperties(MultiInput1);
  NSB.addProperties(psTitle);
  NSB.addDisableProperty(psTitle);


  if(typeof(psTitle.onclick)=='function'){
    if(typeof(psTitle_left)!='undefined') psTitle_left.onclick=function() {psTitle.onclick(psTitle_left.getAttribute('nsbvalue'))};
    if(typeof(psTitle_right)!='undefined') psTitle_right.onclick=function() {psTitle.onclick(psTitle_right.getAttribute('nsbvalue'))}};
  delete psFromAccount.childNodes[0];
  NSB.ComboBox_init('psFromAccount');
  NSB.addProperties(psFromAccount);
  if(typeof psCurrBal==='undefined')psCurrBal=document.getElementById('psCurrBal')
  psCurrBal.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(psCurrBal, $('#psCurrBal_wrapper > div')[0]);
  NSB.addDisableProperty(psCurrBal)
  delete psToAccount.childNodes[0];
  NSB.ComboBox_init('psToAccount');
  NSB.addProperties(psToAccount);
  delete psDayOn.childNodes[0];
  NSB.ComboBox_init('psDayOn');
  NSB.addProperties(psDayOn);
  delete psMonthOn.childNodes[0];
  NSB.ComboBox_init('psMonthOn');
  NSB.addProperties(psMonthOn);
  if(typeof psYear==='undefined')psYear=document.getElementById('psYear')
  psYear.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(psYear, $('#psYear_wrapper > div')[0]);
  NSB.addDisableProperty(psYear)
  if(typeof psDescription==='undefined')psDescription=document.getElementById('psDescription')
  psDescription.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(psDescription, $('#psDescription_wrapper > div')[0]);
  NSB.addDisableProperty(psDescription)
  if(typeof psAmount==='undefined')psAmount=document.getElementById('psAmount')
  psAmount.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(psAmount, $('#psAmount_wrapper > div')[0]);
  NSB.addDisableProperty(psAmount)
  psBottom.refresh=function(){setTimeout(NSB.FooterBarRefresh,10,psBottom)};
  NSB.FooterBar_jqm_init('psBottom','Duplicate,Reverse,Delete');
  NSB.addProperties(psBottom);
  (function(){var d,i,s=''.split(',');for(i=0;i<s.length;i++){if(trim(s[i])!=''){d=document.getElementById('psBottom_'+i);(function(i){d.onclick=function(){ChangeForm(document.getElementById(s[i]))}})(i)}}})()
  PaymentsSingle.style.display = 'none';
}, false);
PaymentsSingle.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(PaymentsSingle);
function LoadPaymentLists() {
  document.body.style.cursor = 'wait';
 var  sd;
  NSB.ShowProgress("Loading...");
  psFromAccount.clear();
  psFromAccount.addItem("" ,"");
  psToAccount.clear();
  psToAccount.addItem("" ,"");
  psMonthOn.clear();
  psMonthOn.addItem("" ,"");
  psDayOn.clear();
  psDayOn.addItem("" ,"");
  for   (i = 1; i  <= 31; i ++) {
    sd = i;
    if(Len(sd)==1 ) { sd = "0"  +  sd; }
    psDayOn.addItem(sd,sd);
  }
  for   (i = 1; i  <= 12; i ++) {
    sd = MonthNames(i);
    psMonthOn.addItem(sd,sd);
  }
  psFromAccount.setIndex(0);
  psToAccount.setIndex(0);
  psDayOn.setIndex(0);
  psMonthOn.setIndex(0);
  sqlList = [];
  sqlList[0] = ["select Name from Accounts order by Name;" , paysHandler, paysError];
  Sql(dbObj, sqlList);
}

function paysError(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

function paysHandler(transaction, results) { savethefunction_rvar="";
 var  row, sName;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sName = row["Name"];
    psFromAccount.addItem(sName,sName);
    psToAccount.addItem(sName,sName);
  }
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

psTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
      switch (True) {
      case ((catFrom) == "accountsList"):
        ChangeForm(AccountsList);
	break;
      case ((catFrom) == "paymentsreport"):
        ChangeForm(PaymentsReport);
        catFrom = "payreport";
	break;
      default:
        ChangeForm(WhatToDo);
	break;
      }
	break;
  case ((choice) == "Save"):
    PSSave();
  }
return savethefunction_rvar; }

PaymentsSingle.onshow = function() { savethefunction_rvar="";
  PSClear();
return savethefunction_rvar; }

function PSClear() {
  psDescription.value="";
  psCurrBal.value="";
  psAmount.value = "0.00";
  psYear.value = "";
  LoadPaymentLists();
  psFromAccount.focus();
  switch (True) {
  case ((catFrom) == "accountsList"):
      psToAccount.setText(acctFrom);
	break;
  default:
   var  saction;
 saction = localStorage.getItem("action");
   var  acctName;
 acctName = localStorage.getItem("payment");
    if(saction == "edit" ) { ReadPaymentById(acctName); }
  }
}

 // used to read a record from the database
function ReadPaymentById(payID) { savethefunction_rvar="";
 var  sqlread;
 sqlread=[];
  sqlread[0] = ["SELECT * FROM [Payments] WHERE [Id] = "  +  payID  +  ";" , ReadPayment, ReadPaymentError];
  Sql(dbObj, sqlread);
return savethefunction_rvar; }

function ReadPaymentError(transaction, results) { savethefunction_rvar="";
 //console.log("Record Payment Error")
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

function ReadPayment(transaction, results) { savethefunction_rvar="";
 var  row, sid, sdayon,smonthon,stoaccount;
 var  syearon,sdescription,samount,sfromaccount;
 var  dpos, mpos, fpos, tpos;
  row = results.rows.item(0);
  sid = row["Id"];
  sdayon = row["DayOn"];
  if(Len(sdayon) == 1 ) { sdayon = "0"  +  sdayon; }
  psDayOn.setText(sdayon);
  smonthon = row["MonthOn"];
  smonthon = MonthNames(smonthon);
  psMonthOn.setText(smonthon);
  psYear.value = row["YearOn"];
  psDescription.value = row["Description"];
  psAmount.value = FormatNumber(row["Amount"],2);
  sfromaccount = row["FromAccount"];
  psFromAccount.setText(sfromaccount);
  stoaccount = row["ToAccount"];
  psToAccount.setText(stoaccount);
  isnew = False;
  recid = _jsCint(sid);
  GetCurrentBalance(sfromaccount);
  PaymentLocalize();
 // perform additional actions after the payment is read
 var  saction1;
 saction1 = localStorage.getItem("action1");
  switch (True) {
  case ((saction1) == "reverse"):
    NextPayment1();
	break;
  case ((saction1) == "duplicate"):
    NextPayment1();
  }
return savethefunction_rvar; }

function PaymentLocalize() {
 // save the payment for later retrieval
  localStorage.setItem("pay_id" , recid);
  localStorage.setItem("pay_dayon" , psDayOn.selectedItem());
  localStorage.setItem("pay_monthon" , psMonthOn.selectedItem());
  localStorage.setItem("pay_yearon" , psYear.value);
  localStorage.setItem("pay_description" , psDescription.value);
  localStorage.setItem("pay_amount" , psAmount.value);
  localStorage.setItem("pay_fromaccount" , psFromAccount.selectedItem());
  localStorage.setItem("pay_toaccount" , psToAccount.selectedItem());
  if(Len(psYear.value)> 0 ) { localStorage.setItem("payYear" , psYear.value); }
  if(Len(psMonthOn.selectedValue())> 0 ) { localStorage.setItem("payMonth" ,psMonthOn.selectedValue()); }
}

function PSSave() {
 var  dbRecord, stoaccount;
 var  sid, sdayon, smonthon, syearon;
 var  sdescription, samount, sfromaccount;
 var  iSave;
 iSave = 0;
  sid = _jsCint(recid);
  sdayon = psDayOn.selectedItem();
  if(Len(sdayon) == 0 ) { iSave = iSave + 1; }
  smonthon = MonthNumber(psMonthOn.selectedItem());
  if(Len(smonthon) == 0 ) { iSave = iSave + 1; }
  syearon = psYear.value;
  if(Len(syearon)==0 ) { iSave = iSave + 1; }
  sdescription = InSingleQuote(psDescription.value);
  if(Len(sdescription) ==0 ) { iSave = iSave + 1; }
  samount = parseFloat(ProperAmount(psAmount.value));
  if(samount == 0 ) { iSave = iSave + 1; }
  sfromaccount = InSingleQuote(psFromAccount.selectedItem());
  if(Len(sfromaccount)==0 ) { iSave = iSave + 1; }
  stoaccount = InSingleQuote(psToAccount.selectedItem());
  if(Len(stoaccount)==0 ) { iSave = iSave + 1; }
  if(iSave != 0) {
    NSB.MsgBox("The payment details are incomplete!");
    psFromAccount.focus();
     return;
  }
  if(sfromaccount == stoaccount) {
    NSB.MsgBox("The From and To accounts cannot be the same!");
    psFromAccount.focus();
     return;
  }
  PaymentLocalize();
  dbRecord = new Object();
  dbRecord["Id"]= sid;
  dbRecord["DayOn"]= sdayon;
  dbRecord["MonthOn"]= smonthon;
  dbRecord["YearOn"]= syearon;
  dbRecord["Description"]= sdescription;
  dbRecord["Amount"]= samount;
  dbRecord["FromAccount"]= sfromaccount;
  dbRecord["ToAccount"]= stoaccount;
  if(isnew == True) {
    InsertRecord("Payments" , dbRecord);
 } else {
   var  dbUpdate;
 dbUpdate = new Object();
    dbUpdate["Id"]= sid;
    UpdateRecord("Payments" , dbRecord, dbUpdate);
  }
  ResetAccounts();
  ResetMonthlySummary();
}


psFromAccount.onchange = function() { savethefunction_rvar="";
 var  sfromaccount;
  sfromaccount = psFromAccount.selectedValue();
  GetCurrentBalance(sfromaccount);
return savethefunction_rvar; }

function GetCurrentBalance(sfromaccount) { savethefunction_rvar="";
  if(Len(sfromaccount)==0 ) { return ""; }
 var  sqlAccount;
  sqlAccount = [];
  sqlAccount[0] = ["select CurrentBalance from Accounts where Name = '"  +  sfromaccount  +  "';" , currentBalance, currentBalanceE];
  Sql(dbObj, sqlAccount);
return savethefunction_rvar; }

function currentBalance(transaction, results) { savethefunction_rvar="";
 var  row, sCurrentBalance, i;
  row = results.rows.item(0);
  sCurrentBalance = parseFloat(row["CurrentBalance"]);
  psCurrBal.value = FormatNumber(sCurrentBalance);
return savethefunction_rvar; }

function currentBalanceE(transaction, results) { savethefunction_rvar="";
  psCurrBal.value = "0.00";
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

psBottom.onclick = function(choice) { savethefunction_rvar="";
  if(recid == -1 )  { return savethefunction_rvar; }
  localStorage.setItem("payment" , recid);
  switch (True) {
  case ((choice) == "Duplicate"):
    localStorage.setItem("action" ,"duplicate");
    NSB.MsgBox(PaymentDuplicate,"Are you sure that you want to duplicate this payment?" , 4+32, "Confirm Duplicate");
	break;
  case ((choice) == "Reverse"):
    localStorage.setItem("action" ,"reverse");
    localStorage.setItem("action1" ,"reverse");
    NSB.MsgBox(PaymentReverse,"Are you sure that you want to reverse this payment?" , 4+32, "Confirm Reverse");
	break;
  case ((choice) == "Delete"):
    localStorage.setItem("action" ,"delete");
    NSB.MsgBox(PaymentDeleteSingle,"Are you sure that you want to delete this payment?" , 4+32, "Confirm Delete");
  }
return savethefunction_rvar; }

function PaymentDeleteSingle(result) {
  if(result != 6 )  { return; }
 var  delRec;
 delRec = new Object();
 var  delname;
 delname = localStorage.getItem("payment");
  delRec["Id"]=delname;
  DeleteRecord("Payments" , delRec);
  ResetAccounts();
  ResetMonthlySummary();
  ChangeForm(PaymentsReport);
}

window.addEventListener('load', function() {
  Account.style.display = 'block';


  NSB.MultiInput_init('MultiInput2');

  NSB.addProperties(MultiInput2);
  NSB.addProperties(accTitle);
  NSB.addDisableProperty(accTitle);


  if(typeof(accTitle.onclick)=='function'){
    if(typeof(accTitle_left)!='undefined') accTitle_left.onclick=function() {accTitle.onclick(accTitle_left.getAttribute('nsbvalue'))};
    if(typeof(accTitle_right)!='undefined') accTitle_right.onclick=function() {accTitle.onclick(accTitle_right.getAttribute('nsbvalue'))}};
  if(typeof txtAccountNo==='undefined')txtAccountNo=document.getElementById('txtAccountNo')
  txtAccountNo.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(txtAccountNo, $('#txtAccountNo_wrapper > div')[0]);
  NSB.addDisableProperty(txtAccountNo)
  if(typeof txtAccountName==='undefined')txtAccountName=document.getElementById('txtAccountName')
  txtAccountName.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(txtAccountName, $('#txtAccountName_wrapper > div')[0]);
  NSB.addDisableProperty(txtAccountName)
  delete cboAccountCategory.childNodes[0];
  NSB.ComboBox_init('cboAccountCategory');
  NSB.addProperties(cboAccountCategory);
  delete cboAccountInstitution.childNodes[0];
  NSB.ComboBox_init('cboAccountInstitution');
  NSB.addProperties(cboAccountInstitution);
  if(typeof txtAccountOpenBal==='undefined')txtAccountOpenBal=document.getElementById('txtAccountOpenBal')
  txtAccountOpenBal.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(txtAccountOpenBal, $('#txtAccountOpenBal_wrapper > div')[0]);
  NSB.addDisableProperty(txtAccountOpenBal)
  if(typeof txtAccountCurrBal==='undefined')txtAccountCurrBal=document.getElementById('txtAccountCurrBal')
  txtAccountCurrBal.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(txtAccountCurrBal, $('#txtAccountCurrBal_wrapper > div')[0]);
  NSB.addDisableProperty(txtAccountCurrBal)
  if(typeof txtAccountInstallment==='undefined')txtAccountInstallment=document.getElementById('txtAccountInstallment')
  txtAccountInstallment.addEventListener('touchmove', function(e) { e.stopPropagation(); }, false);
  NSB.addProperties(txtAccountInstallment, $('#txtAccountInstallment_wrapper > div')[0]);
  NSB.addDisableProperty(txtAccountInstallment)
  delete cboAccountType.childNodes[0];
  NSB.ComboBox_init('cboAccountType');
  NSB.addProperties(cboAccountType);
  chkAccountPayFrom.value=function() {return chkAccountPayFrom_inner.options[chkAccountPayFrom_inner.selectedIndex].innerHTML;}
  chkAccountPayFrom.setting=function() {return chkAccountPayFrom_inner.options[chkAccountPayFrom_inner.selectedIndex].innerHTML!='No';}
  chkAccountPayFrom.setValue=function(n) {$('#chkAccountPayFrom_inner').val(n).slider('refresh'); }
  $('#chkAccountPayFrom .ui-slider-switch').css('width','95px')
  $('#chkAccountPayFrom>div').css('width','100%').css('height','100%');
  NSB.addDisableProperty(chkAccountPayFrom);NSB.addProperties(chkAccountPayFrom);
  Account.style.display = 'none';
}, false);
Account.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Account);
function LoadAccountLists() {
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  cboAccountCategory.clear();
  cboAccountCategory.addItem("" ,"");
  cboAccountInstitution.clear();
  cboAccountInstitution.addItem("" ,"");
  cboAccountType.clear();
  cboAccountType.addItem("" ,"");
  cboAccountType.addItem("Assets" ,"Assets");
  cboAccountType.addItem("Liabilities" ,"Liabilities");
  cboAccountType.addItem("Incomes" ,"Incomes");
  cboAccountType.addItem("Expenses" ,"Expenses");
  cboAccountCategory.setIndex(0);
  cboAccountInstitution.setIndex(0);
  cboAccountType.setIndex(0);
  sqlList = [];
  sqlList[0] = ["SELECT CategoryName from Categories ORDER BY CategoryName;" , lst1Handler, lst1Error];
  sqlList[1] = ["SELECT Name from Institutions ORDER BY Name;" , lst2Handler, lst1Error];
  Sql(dbObj, sqlList);
}

function lst1Error(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

function lst1Handler(transaction, results) { savethefunction_rvar="";
 var  row, sCategoryName, i;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sCategoryName = row["CategoryName"];
    cboAccountCategory.addItem(sCategoryName,sCategoryName);
  }
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function lst2Handler(transaction, results) { savethefunction_rvar="";
 var  row, sName, i;
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    sName = row["Name"];
    cboAccountInstitution.addItem(sName,sName);
  }
return savethefunction_rvar; }

accTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
      switch (True) {
      case ((catFrom) == "accountreport"):
        ChangeForm(AccountReport);
        catFrom = "";
	break;
      case ((catFrom) == "accountmovement"):
        ChangeForm(AccountMovements);
        catFrom = "";
	break;
      default:
        ChangeForm(AccountsList);
	break;
      }
	break;
  case ((choice) == "Save"):
    AccountSave();
  }
return savethefunction_rvar; }

Account.onshow = function() { savethefunction_rvar="";
  AccountClear();
return savethefunction_rvar; }

function AccountClear() {
  txtAccountNo.value="";
  txtAccountName.value="";
  txtAccountOpenBal.value = "0.00";
  txtAccountCurrBal.value = "0.00";
  txtAccountInstallment.value = "0.00";
  chkAccountPayFrom.value = "No";
  LoadAccountLists();
  txtAccountNo.focus();
 var  saction;
 saction = localStorage.getItem("action");
 var  acctName;
 acctName = localStorage.getItem("account");
  if(saction == "readaccount" ) { ReadAccountByName(acctName); }
}

function AccountSave() {
 var  dbRecord, dbRecord1;
 var  sId,sAccountNo,sName;
 var  sCategoryName,sInstitutionName,sOpeningBalance;
 var  sPayFrom,sTypeOf,sInstallment,sCurrentBalance;
 var  isave;
 isave = 0;
  sId = _jsCint(recid);
  sAccountNo = InSingleQuote(txtAccountNo.value);
  sName = InSingleQuote(txtAccountName.value);
  sCategoryName = cboAccountCategory.selectedItem();
  sCategoryName = InSingleQuote(sCategoryName);
  sInstitutionName = cboAccountInstitution.selectedItem();
  sInstitutionName = InSingleQuote(sInstitutionName);
  sOpeningBalance = parseFloat(ProperAmount(txtAccountOpenBal.value));
  sOpeningBalance = InSingleQuote(sOpeningBalance);
  sPayFrom = chkAccountPayFrom.setting();
  if(sPayFrom == True) {
    sPayFrom = "Yes";
 } else {
    sPayFrom = "No";
  }
  if(sPayFrom == "Yes" ) { localStorage.setItem("payfrom" , txtAccountName.value); }
  sPayFrom = InSingleQuote(sPayFrom);
  sTypeOf = InSingleQuote(cboAccountType.selectedItem());
  sInstallment = parseFloat(ProperAmount(txtAccountInstallment.value));
  sCurrentBalance = parseFloat(ProperAmount(txtAccountCurrBal.value));
 // check if details complete
  if(Len(txtAccountName.value)==0 ) { isave = isave + 1; }
  if(Len(cboAccountCategory.selectedItem()) == 0 ) { isave = isave + 1; }
  if(Len(cboAccountInstitution.selectedItem()) == 0 ) { isave = isave + 1; }
  if(Len(cboAccountType.selectedItem()) == 0 ) { isave = isave + 1; }
  if(isave != 0) {
    NSB.MsgBox("The account details are incomplete!");
     return;
  }

  dbRecord = new Object();
  dbRecord["Id"]= sId;
  dbRecord["AccountNo"]= sAccountNo;
  dbRecord["Name"]= sName;
  dbRecord["CategoryName"]= sCategoryName;
  dbRecord["InstitutionName"]= sInstitutionName;
  dbRecord["OpeningBalance"]= sOpeningBalance;
  dbRecord["PayFrom"]= sPayFrom;
  dbRecord["TypeOf"]= sTypeOf;
  dbRecord["Installment"]= sInstallment;
  dbRecord["CurrentBalance"]= sCurrentBalance;
  if(isnew == True) {
    InsertRecord("Accounts" , dbRecord);
 } else {
   var  dbUpdate;
 dbUpdate = new Object();
    dbUpdate["Id"]= sId;
    UpdateRecord("Accounts" , dbRecord, dbUpdate);
  }
  ResetAccounts();
  ResetMonthlySummary();
}

 // used to read a record from the database
function ReadAccountByName(acctName) { savethefunction_rvar="";
 var  sqlread;
 sqlread=[];
  sqlread[0] = ["SELECT * FROM [Accounts] WHERE [Name] = '"  +  acctName  +  "';" , ReadAccount, ReadAccountError];
  Sql(dbObj, sqlread);
return savethefunction_rvar; }

function ReadAccount(transaction, results) { savethefunction_rvar="";
 var  row;
 var  sCategory, sInstitution, sType;
 var  catIndex, instIndex, typeIndex, sPayFrom;
  row = results.rows.item(0);
  recid = _jsCint(row["Id"]);
  txtAccountNo.value = row["AccountNo"];
  txtAccountName.value = row["Name"];
  sCategory = row["CategoryName"];
  sInstitution = row["InstitutionName"];
  sType = row["TypeOf"];
  sPayFrom = row["PayFrom"];
  switch (True) {
  case ((sPayFrom) == "Y" ): case ((sPayFrom) ==  "Yes"):
    sPayFrom = "Yes";
	break;
  default:
    sPayFrom = "No";
  }
  if(sPayFrom == "Yes" ) { localStorage.setItem("payfrom" , txtAccountName.value); }
  cboAccountCategory.setText(sCategory);
  cboAccountInstitution.setText(sInstitution);
  cboAccountType.setText(sType);
  txtAccountOpenBal.value = FormatNumber(row["OpeningBalance"],2);
  chkAccountPayFrom.setValue(sPayFrom);
  txtAccountInstallment.value = FormatNumber(row["Installment"],2);
  txtAccountCurrBal.value = FormatNumber(row["CurrentBalance"],2);
  isnew = False;
 // change bold of selects to normal
 //$("#cboAccountCategory select").style.fontWeight = "normal";
 //cboAccountCategory.style.fontWeight = "normal"
 //console.log(cboAccountCategory.innerHTML) 
return savethefunction_rvar; }

function ReadAccountError(transaction, results) { savethefunction_rvar="";
 //console.log("Record Account Error")
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }
window.addEventListener('load', function() {
  MonthlySummary.style.display = 'block';
  NSB.addProperties(msTitle);
  NSB.addDisableProperty(msTitle);


  if(typeof(msTitle.onclick)=='function'){
    if(typeof(msTitle_left)!='undefined') msTitle_left.onclick=function() {msTitle.onclick(msTitle_left.getAttribute('nsbvalue'))};
    if(typeof(msTitle_right)!='undefined') msTitle_right.onclick=function() {msTitle.onclick(msTitle_right.getAttribute('nsbvalue'))}};
  grdMS_ref = new iScroll('grdMS_scroller',{ bounce:true, zoom:false });
  grdMS.refresh=function(){setTimeout(NSB.refresh,100,grdMS_ref)};
  grdMS.GridRefreshWidth=function(){setTimeout(NSB.GridRefreshWidth,10,grdMS)};
  NSB.Grid_init('grdMS');
  NSB.addProperties(grdMS,grdMS_scroller)
  MonthlySummary.style.display = 'none';
}, false);
MonthlySummary.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(MonthlySummary);

function LoadMonthlySummary() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  grdMS.Left = 0;
  grdMS.Top = msTitle.Height;
  grdMS.Height = MonthlySummary.Height - msTitle.Height;
  grdMS.Width = MonthlySummary.Width;
  payYear = localStorage.getItem("payYear");
  payMonth = localStorage.getItem("payMonth");
  $("#msTitle h1").text("Monthly Summary: "  +  payYear  +  " "  +  MonthName(_jsCint(payMonth)));
  payMonth = _jsCint(payMonth);
  rCnt = grdMS.getRowCount();
  grdMS.deleteRows(rCnt);
  $("#grdMS td").css("font-family" , "helvetica");
  monthlysummaryB = True;
  monthlysummaryC = False;
  ResetMonthlySummary();
return savethefunction_rvar; }


function msHandler3(transaction, results) { savethefunction_rvar="";
 var  row, i, rCnt;
 var  scostsplit, scost2income, scost2incomeM;
 var  scategory, samount, scostsplit, sbudget;
  rCnt = 1;
  scost2incomeM = localStorage.getItem("Cost2Income");
  AddMSRow(rCnt,payYear  +  " "  +  MonthName(payMonth),"0" ,"0" ,"100%" , scost2incomeM  +  "%");
  if(parseFloat(scost2incomeM)> 100) {
    GridRowColColour(grdMS,1,4,"red");
 } else {
    GridRowColColour(grdMS,1,4,"green");
  }
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    scategory = row["Category"];
    samount = row["Amount"];
    sbudget = row["Budget"];
    scostsplit = row["CostSplit"];
    scost2income = row["Cost2Income"];
    rCnt = rCnt + 1;
    AddMSRow(rCnt,scategory,sbudget,samount,scostsplit  +  "%" , scost2income  +  "%");
  }
 // add total costs
  rCnt = rCnt + 1;
  samount = parseFloat(localStorage.getItem("Expenses"));
  AddMSRow(rCnt,"Total Costs" ,"0.00" ,samount,"" ,"");
  GridBoldRow(grdMS,1);
  GridBoldRow(grdMS,2);
  GridBoldRow(grdMS,rCnt);
  GridRowColColour(grdMS,rCnt,2,"red");
 // add available funds
  rCnt = rCnt + 1;
  sdiff = parseFloat(localStorage.getItem("Incomes"));
  sdiff = sdiff - parseFloat(samount);
  AddMSRow(rCnt,"Available Funds" ,"0.00" ,sdiff,"" ,"");
  if(parseFloat(sdiff) < 0) {
    GridRowColColour(grdMS,rCnt,2,"red");
 } else {
    GridRowColColour(grdMS,rCnt,2,"green");
  }
  GridBoldRow(grdMS,rCnt);
  GridSetHeight(grdMS,"32px");
  GridRightAlign(grdMS,1,4);
  GridAlternateColor(grdMS);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function AddMSRow(rowPos,scategory,sbudget,samount,scostsplit,scost2income) { savethefunction_rvar="";
  grdMS.addRows(1);
  grdMS.setValue(rowPos,0,scategory);
  grdMS.setValue(rowPos,1,FormatNumber(sbudget,2));
  grdMS.setValue(rowPos,2,FormatNumber(samount,2));
  grdMS.setValue(rowPos,3,scostsplit);
  grdMS.setValue(rowPos,4,scost2income);
return savethefunction_rvar; }



function msError3(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
 //console.log("ms_error3:" & results.message)
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }

msTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(PaymentsSelector);
	break;
  case ((choice) == "Refresh"):
    LoadMonthlySummary();
  }
return savethefunction_rvar; }

MonthlySummary.onshow = function() { savethefunction_rvar="";
  LoadMonthlySummary();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  MonthlySummaryChart.style.display = 'block';
  NSB.addProperties(mscTitle);
  NSB.addDisableProperty(mscTitle);


  if(typeof(mscTitle.onclick)=='function'){
    if(typeof(mscTitle_left)!='undefined') mscTitle_left.onclick=function() {mscTitle.onclick(mscTitle_left.getAttribute('nsbvalue'))};
    if(typeof(mscTitle_right)!='undefined') mscTitle_right.onclick=function() {mscTitle.onclick(mscTitle_right.getAttribute('nsbvalue'))}};
msChart_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
msChart.style.position='relative';
NSB.addProperties(msChart,msChart_wrapper);
  MonthlySummaryChart.style.display = 'none';
}, false);
MonthlySummaryChart.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(MonthlySummaryChart);
function LoadMSChart() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  msChart.Left = 0;
  msChart.Top = mscTitle.Height;
  msChart.Height = MonthlySummaryChart.Height - mscTitle.Height;
  msChart.Width = MonthlySummaryChart.Width;
  payYear = localStorage.getItem("payYear");
  payMonth = localStorage.getItem("payMonth");
  $("#mscTitle h1").text("Monthly Summary: "  +  payYear  +  " "  +  MonthName(_jsCint(payMonth)));
  payMonth = _jsCint(payMonth);
  monthlysummaryB = False;
  monthlysummaryC = True;
  ResetMonthlySummary();
return savethefunction_rvar; }

function mscHandler4(transaction, results) { savethefunction_rvar="";
 var  row, i, rCnt, scategory, samount, scostsplit, scost2income, crow;
 var  crows;
  crows = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    scategory = row["Category"];
    samount = row["Amount"];
    scostsplit = row["CostSplit"];
    scost2income = row["Cost2Income"];
    crow = {}
    crow["category"] = scategory;
    crow["CostSplit"] = scostsplit;
    crow["Cost2Income"] = scost2income;
    crows[i] = crow;
  }

 // define the chart
  msChart_settings.showBorderLine = False;
  msChart_settings.source = crows;
  msChart_settings.categoryAxis={dataField:"category" , showGridLines:True,textRotationAngle:-90}
  msChart_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Percentage" , unitInterval: 10, formatSettings: {prefix: "" , thousandsSeparator: ","}},  series:[  { dataField: "CostSplit" , showLabels:True, displayText: "Cost Split"},  { dataField: "Cost2Income" , showLabels: True, displayText: "Cost to Income"},  ]  }  ];
 //Render the chart.  
      $("#msChart").jqxChart(msChart_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function mscError4(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
 //console.log("msc_error4:" & results.message)
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }




mscTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(PaymentsSelector);
  }
return savethefunction_rvar; }

MonthlySummaryChart.onshow = function() { savethefunction_rvar="";
  LoadMSChart();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  HistoryChart.style.display = 'block';
  NSB.addProperties(historyTitle);
  NSB.addDisableProperty(historyTitle);


  if(typeof(historyTitle.onclick)=='function'){
    if(typeof(historyTitle_left)!='undefined') historyTitle_left.onclick=function() {historyTitle.onclick(historyTitle_left.getAttribute('nsbvalue'))};
    if(typeof(historyTitle_right)!='undefined') historyTitle_right.onclick=function() {historyTitle.onclick(historyTitle_right.getAttribute('nsbvalue'))}};
historyChart1_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
historyChart1.style.position='relative';
NSB.addProperties(historyChart1,historyChart1_wrapper);
  HistoryChart.style.display = 'none';
}, false);
HistoryChart.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(HistoryChart);
function LoadHistoryChart() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  historyChart1.Left = 0;
  historyChart1.Top = historyTitle.Height;
  historyChart1.Height = HistoryChart.Height - historyTitle.Height;
  historyChart1.Width = HistoryChart.Width;
  payYear = localStorage.getItem("payYear");
  $("#historyTitle h1").text("History Chart: "  +  payYear);
  sqlList = [];
  sqlList[0] = ["SELECT * from Category_Movement Where YearOn = "  +  payYear  +  " AND TypeOf in ('Incomes','Expenses') ORDER BY TypeOf DESC;" , historyHandler, historyHandlerE];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function historyHandler(transaction, results) { savethefunction_rvar="";
 var  row, i, crow, crows;
  crows = [];
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    crow = {}
    crow["category"] = row["AccountName"];
    crow["Jan"] = row["ActualJan"];
    crow["Feb"] = row["ActualFeb"];
    crow["Mar"] = row["ActualMar"];
    crow["Apr"] = row["ActualApr"];
    crow["May"] = row["ActualMay"];
    crow["Jun"] = row["ActualJun"];
    crow["Jul"] = row["ActualJul"];
    crow["Aug"] = row["ActualAug"];
    crow["Sep"] = row["ActualSep"];
    crow["Oct"] = row["ActualOct"];
    crow["Nov"] = row["ActualNov"];
    crow["Dec"] = row["ActualDec"];
 // positive amounts
    if(parseFloat(crow["Jan"]) < 0 ) { crow["Jan"] = parseFloat(crow["Jan"]) * (0-1); }
    if(parseFloat(crow["Feb"]) < 0 ) { crow["Feb"] = parseFloat(crow["Feb"]) * (0-1); }
    if(parseFloat(crow["Mar"]) < 0 ) { crow["Mar"] = parseFloat(crow["Mar"]) * (0-1); }
    if(parseFloat(crow["Apr"]) < 0 ) { crow["Apr"] = parseFloat(crow["Apr"]) * (0-1); }
    if(parseFloat(crow["May"]) < 0 ) { crow["May"] = parseFloat(crow["May"]) * (0-1); }
    if(parseFloat(crow["Jun"]) < 0 ) { crow["Jun"] = parseFloat(crow["Jun"]) * (0-1); }
    if(parseFloat(crow["Jul"]) < 0 ) { crow["Jul"] = parseFloat(crow["Jul"]) * (0-1); }
    if(parseFloat(crow["Aug"]) < 0 ) { crow["Aug"] = parseFloat(crow["Aug"]) * (0-1); }
    if(parseFloat(crow["Sep"]) < 0 ) { crow["Sep"] = parseFloat(crow["Sep"]) * (0-1); }
    if(parseFloat(crow["Oct"]) < 0 ) { crow["Oct"] = parseFloat(crow["Oct"]) * (0-1); }
    if(parseFloat(crow["Nov"]) < 0 ) { crow["Nov"] = parseFloat(crow["Nov"]) * (0-1); }
    if(parseFloat(crow["Dec"]) < 0 ) { crow["Dec"] = parseFloat(crow["Dec"]) * (0-1); }
    crows[i] = crow;
  }

 // define the chart
  historyChart1_settings.showBorderLine = False;
  historyChart1_settings.source = crows;
  historyChart1_settings.categoryAxis={dataField:"category" , showGridLines:True,textRotationAngle:-90}
  historyChart1_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Amount" , formatSettings: {prefix: "" , thousandsSeparator: ","}},  series:[  { dataField: "Jan" , displayText: "Jan"},  { dataField: "Feb" , displayText: "Feb"},  { dataField: "Mar" , displayText: "Mar"},  { dataField: "Apr" , displayText: "Apr"},  { dataField: "May" , displayText: "May"},  { dataField: "Jun" , displayText: "Jun"},  { dataField: "Jul" , displayText: "Jul"},  { dataField: "Aug" , displayText: "Aug"},  { dataField: "Sep" , displayText: "Sep"},  { dataField: "Oct" , displayText: "Oct"},  { dataField: "Nov" , displayText: "Nov"},  { dataField: "Dec" , displayText: "Dec"},  ]  }  ];
 //Render the chart.  
      $("#historyChart1").jqxChart(historyChart1_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function historyHandlerE(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
 //console.log("msc_error4:" & results.message)
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }


historyTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(PaymentsSelector);
  }
return savethefunction_rvar; }

HistoryChart.onshow = function() { savethefunction_rvar="";
  LoadHistoryChart();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  IEChart.style.display = 'block';
  NSB.addProperties(ieTitle);
  NSB.addDisableProperty(ieTitle);


  if(typeof(ieTitle.onclick)=='function'){
    if(typeof(ieTitle_left)!='undefined') ieTitle_left.onclick=function() {ieTitle.onclick(ieTitle_left.getAttribute('nsbvalue'))};
    if(typeof(ieTitle_right)!='undefined') ieTitle_right.onclick=function() {ieTitle.onclick(ieTitle_right.getAttribute('nsbvalue'))}};
ieChart1_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
ieChart1.style.position='relative';
NSB.addProperties(ieChart1,ieChart1_wrapper);
  IEChart.style.display = 'none';
}, false);
IEChart.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(IEChart);
function LoadIEChart() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  ieChart1.Left = 0;
  ieChart1.Top = ieTitle.Height;
  ieChart1.Height = IEChart.Height - ieTitle.Height;
  ieChart1.Width = IEChart.Width;
  payYear = localStorage.getItem("payYear");
  $("#ieTitle h1").text("Income vs Expenses Chart: "  +  payYear);
  sqlList = [];
  sqlList[0] = ["SELECT * from Category_Movement Where YearOn = "  +  payYear  +  " AND TypeOf in ('Incomes','Expenses') ORDER BY TypeOf DESC;" , ieHandler, ieHandlerE];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function ieHandler(transaction, results) { savethefunction_rvar="";
 var  row, i, x, aold, samount, stypeof;
 var  siname, sename, mactual;
 var  crow, crows;
 var  iamount, eamount, mname;
  for   (x = 1; x  <= 12; x ++) {
    siname = MonthNames(x)  +  "_Incomes";
    sename = MonthNames(x)  +  "_Expenses";
    localStorage.setItem(siname,0);
    localStorage.setItem(sename,0);
  }
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    stypeof = row["TypeOf"];
    for   (x = 1; x  <= 12; x ++) {
      mactual = "Actual"  +  MonthNames(x);
      samount = row[mactual];
      switch (True) {
      case ((stypeof) == "Incomes"):
        siname = MonthNames(x)  +  "_Incomes";
        aold = localStorage.getItem(siname);
        aold = parseFloat(aold) + parseFloat(samount);
        localStorage.setItem(siname,aold);
	break;
      case ((stypeof) == "Expenses"):
        sename = MonthNames(x)  +  "_Expenses";
        aold = localStorage.getItem(sename);
        aold = parseFloat(aold) + parseFloat(samount);
        localStorage.setItem(sename,aold);
      }
    }
  }

  crows = [];
  for   (i = 1; i  <= 12; i ++) {
    siname = MonthNames(i)  +  "_Incomes";
    sename = MonthNames(i)  +  "_Expenses";
    iamount = localStorage.getItem(siname);
    eamount = localStorage.getItem(sename);
    mname = MonthNames(i);
    if(parseFloat(iamount) < 0 ) { iamount = parseFloat(iamount) * (0-1); }
    if(parseFloat(eamount) < 0 ) { eamount = parseFloat(eamount) * (0-1); }
    crow = {}
    crow["period"] = mname;
    crow["income"] = iamount;
    crow["expenses"] = eamount;
    crows[i-1] = crow;
  }

 // define the chart
  ieChart1_settings.showBorderLine = False;
  ieChart1_settings.source = crows;
  ieChart1_settings.categoryAxis={dataField:"period" , showGridLines:True,textRotationAngle:-90}
  ieChart1_settings.seriesGroups = [  {  type: "spline" ,  valueAxis:  {description: "Amount" , formatSettings: {prefix: "" , thousandsSeparator: ","}},  series:[  { dataField: "income" , displayText: "Income"},  { dataField: "expenses" , displayText: "Expenses"},  ]  }  ];
 //Render the chart.  
      $("#ieChart1").jqxChart(ieChart1_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function ieHandlerE(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
 //console.log("ieHandler:" & results.message)
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }


ieTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(PaymentsSelector);
  }
return savethefunction_rvar; }

IEChart.onshow = function() { savethefunction_rvar="";
  LoadIEChart();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  Cost2Income.style.display = 'block';
  NSB.addProperties(cost2incomeTitle);
  NSB.addDisableProperty(cost2incomeTitle);


  if(typeof(cost2incomeTitle.onclick)=='function'){
    if(typeof(cost2incomeTitle_left)!='undefined') cost2incomeTitle_left.onclick=function() {cost2incomeTitle.onclick(cost2incomeTitle_left.getAttribute('nsbvalue'))};
    if(typeof(cost2incomeTitle_right)!='undefined') cost2incomeTitle_right.onclick=function() {cost2incomeTitle.onclick(cost2incomeTitle_right.getAttribute('nsbvalue'))}};
cost2incomeChart_settings={'title':'', 'background':'white',
'description':'', 'padding':{ left: 10, top: 10, right: 10, bottom: 10 }, 'titlePadding':{ left: 2, top: 2, right: 2, bottom: 2 },
'colorScheme':'scheme01', 'showLegend':'true', 'enabled':'true',
'showToolTips':'true', 'toolTipDelay':'500' }
cost2incomeChart.style.position='relative';
NSB.addProperties(cost2incomeChart,cost2incomeChart_wrapper);
  Cost2Income.style.display = 'none';
}, false);
Cost2Income.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(Cost2Income);
function LoadCost2IncomeChart() { savethefunction_rvar="";
  document.body.style.cursor = 'wait';
  NSB.ShowProgress("Loading...");
  cost2incomeChart.Left = 0;
  cost2incomeChart.Top = cost2incomeTitle.Height;
  cost2incomeChart.Height = Cost2Income.Height - cost2incomeTitle.Height;
  cost2incomeChart.Width = Cost2Income.Width;
  payYear = localStorage.getItem("payYear");
  $("#cost2incomeTitle h1").text("Cost to Income: "  +  payYear);
  sqlList = [];
  sqlList[0] = ["SELECT * from Category_Movement Where YearOn = "  +  payYear  +  " AND TypeOf in ('Incomes','Expenses') ORDER BY TypeOf DESC;" , cost2incomeHandler, cost2incomeHandlerE];
  Sql(dbObj, sqlList);
return savethefunction_rvar; }

function cost2incomeHandler(transaction, results) { savethefunction_rvar="";
 var  row, i, x, aold, samount, stypeof;
 var  siname, sename, mactual;
 var  crow, crows;
 var  iamount, eamount, mname;
  for   (x = 1; x  <= 12; x ++) {
    siname = MonthNames(x)  +  "_Incomes";
    sename = MonthNames(x)  +  "_Expenses";
    localStorage.setItem(siname,0);
    localStorage.setItem(sename,0);
  }
  for   (i = 0; i  <= results.rows.length - 1; i ++) {
    row = results.rows.item(i);
    stypeof = row["TypeOf"];
    for   (x = 1; x  <= 12; x ++) {
      mactual = "Actual"  +  MonthNames(x);
      samount = row[mactual];
      switch (True) {
      case ((stypeof) == "Incomes"):
        siname = MonthNames(x)  +  "_Incomes";
        aold = localStorage.getItem(siname);
        aold = parseFloat(aold) + parseFloat(samount);
        localStorage.setItem(siname,aold);
	break;
      case ((stypeof) == "Expenses"):
        sename = MonthNames(x)  +  "_Expenses";
        aold = localStorage.getItem(sename);
        aold = parseFloat(aold) + parseFloat(samount);
        localStorage.setItem(sename,aold);
      }
    }
  }

  crows = [];
  for   (i = 1; i  <= 12; i ++) {
   var  scost2income;
 scost2income = 0;
    siname = MonthNames(i)  +  "_Incomes";
    sename = MonthNames(i)  +  "_Expenses";
    iamount = localStorage.getItem(siname);
    eamount = localStorage.getItem(sename);
    mname = MonthNames(i);
    if(parseFloat(iamount) < 0 ) { iamount = parseFloat(iamount) * (0-1); }
    if(parseFloat(eamount) < 0 ) { eamount = parseFloat(eamount) * (0-1); }
    console.log(i  +  ", "  +  iamount  +  " - "  +  eamount);
    scost2income = parseFloat(eamount) / parseFloat(iamount);
    scost2income = parseFloat(scost2income) * 100;
    scost2income = Round(scost2income,0);
    crow = {}
    crow["period"] = mname;
    crow["cost2income"] = scost2income;
    crows[i-1] = crow;
  }

 // define the chart
  cost2incomeChart_settings.showBorderLine = False;
  cost2incomeChart_settings.source = crows;
  cost2incomeChart_settings.categoryAxis={dataField:"period" , showGridLines:True,textRotationAngle:-90}
  cost2incomeChart_settings.seriesGroups = [  {  type: "column" ,  valueAxis:  {description: "Amount" , unitInterval: 10, formatSettings: {prefix: "" , thousandsSeparator: ","}},  series:[  { dataField: "cost2income" , showLabels:True, displayText: "Cost to Income"},  ]  }  ];
 //Render the chart.  
      $("#cost2incomeChart").jqxChart(cost2incomeChart_settings);
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
return savethefunction_rvar; }

function cost2incomeHandlerE(transaction, results) { savethefunction_rvar="";
  NSB.ShowProgress(False);
  document.body.style.cursor = 'default';
 //console.log("ieHandler:" & results.message)
  NSB.MsgBox("SQL Error: "  +  results.code  +  ": "  +  results.message);
return savethefunction_rvar; }


cost2incomeTitle.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Back"):
    ChangeForm(PaymentsSelector);
  }
return savethefunction_rvar; }

Cost2Income.onshow = function() { savethefunction_rvar="";
  LoadCost2IncomeChart();
return savethefunction_rvar; }

window.addEventListener('load', function() {
  frmAbout.style.display = 'block';
  NSB.addProperties(hAbout);
  NSB.addDisableProperty(hAbout);


  if(typeof(hAbout.onclick)=='function'){
    if(typeof(hAbout_left)!='undefined') hAbout_left.onclick=function() {hAbout.onclick(hAbout_left.getAttribute('nsbvalue'))};
    if(typeof(hAbout_right)!='undefined') hAbout_right.onclick=function() {hAbout.onclick(hAbout_right.getAttribute('nsbvalue'))}};


  NSB.addProperties(Label12);


  NSB.addProperties(Label13);
  NSB.addProperties(Line1);
  frmAbout.style.display = 'none';
}, false);
frmAbout.onsubmit=function(event){window.event.stopPropagation();window.event.preventDefault()};
NSB.addProperties(frmAbout);
hAbout.onclick = function(choice) { savethefunction_rvar="";
  if(TypeName(choice) == "object" )  { return savethefunction_rvar; }
  switch (True) {
  case ((choice) == "Home"):
    ChangeForm(WhatToDo);
  }
return savethefunction_rvar; }
