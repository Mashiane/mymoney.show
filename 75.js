
PaymentsSingle.innerHTML=[  NSB.MultiInput("MultiInput1", 6, "bigfield", "From Acct,Cur Bal,To Acct,Date,Description,Amount", "", "text,text,text,text,text,text", "From Acct,Cur Bal,To Acct,Date,Description,Amount", " style=  ", false),
  NSB.HeaderBar_jqm("psTitle", "Pay", "Back", "arrow-l", "Save", "check", " data-theme=b style='' class=' ' "),
  NSB.ComboBox("psFromAccount", "", "1,2", "", ""),
  "<div id='psCurrBal_wrapper'><input id='psCurrBal' type='text' data-theme='b' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Current Balance' data-mini='true' data-nsb-type='TextBox_jqm' class=' ' readonly/></div>",
  NSB.ComboBox("psToAccount", "", "1,2", "", ""),
  NSB.ComboBox("psDayOn", "01", "1,2", "", ""),
  NSB.ComboBox("psMonthOn", "Jan", "1,2", "", ""),
  "<div id='psYear_wrapper'><input id='psYear' type='text' data-theme='b' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='2013' placeholder='Year' data-mini='true' data-nsb-type='TextBox_jqm' class=' ' /></div>",
  "<div id='psDescription_wrapper'><input id='psDescription' type='text' data-theme='b' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Description' data-mini='true' data-nsb-type='TextBox_jqm' class=' ' /></div>",
  "<div id='psAmount_wrapper'><input id='psAmount' type='text' data-theme='b' name='' autocorrect='on' autocomplete='on' autocapitalize='on' maxlength='32' value='' placeholder='Amount' data-mini='true' data-nsb-type='TextBox_jqm' class=' ' /></div>",
  ].join('');
