
AccountBudgets.innerHTML=[  NSB.HeaderBar_jqm("accountBudgetsTitle", "Account Budgets", "Back", "arrow-l", "Chart", "grid", " data-theme=b style='' class=' ' "),
  "<label id='lblAccName' class='graytitle' style='text-align:left;  font-size:16px; font-family:helvetica; font-style:normal; font-weight:bold; color:black; background-color:transparent; border-style:;border-color:transparent;border-width:1px; ' >Label</label>",
  "<div id='accountYearlyChart_wrapper' style='background-color:white;'><div id='accountYearlyChart'></div></div>",
  NSB.Grid("grdAccountBudgets", "1", "4", "", "", "Period,Budget,Actual,Cost Split", "left,right,right,right", "style=", ""),
  ].join('');
