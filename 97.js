
Budgets.innerHTML=[  NSB.MultiInput("miBudgets1", 6, "bigfield", "Jan,Mar,Jun,Aug,Oct,Dec", "", "number,number,number,number,number,number", "", " style=  ", false),
  NSB.MultiInput("miBudgets2", 6, "bigfield", "Feb,Apr,Jul,Sep,Nov", "", "number,number,number,number,number,number", "", " style=  ", false),
  NSB.MultiInput("budgetsInput", 6, "bigfield", "", "", "text,text,text,text,text,text", "Jan/Feb,Mar/Apr,Jun/Jul,Aug/Sep,Oct/Nov,Dec", " style= disabled='disabled' ", false),
  NSB.MultiInput("MultiInput3", 2, "bigfield", "One,Two", "", "text,text", "Year,Account", " style= disabled='disabled' ", false),
  NSB.ComboBox("cboBudgetAccount", "One,Two", "1,2", "", ""),
  NSB.HeaderBar_jqm14('budgetsTitle', 'Account Budgets', 'Back', 'arrow-l', 'left', 'Next', 'arrow-r', 'right', ' style="" class=" "'),
  "<div id='txtBudgetYear_wrapper'><input id='txtBudgetYear' type='text' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Budget Year' data-nsb-type='TextBox_jqm'  class='ui-mini ui-btn-  ' /></div>",
  ].join('');
