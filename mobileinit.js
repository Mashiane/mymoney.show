<script>
        $(document).bind("mobileinit", function () {
            //Our initialization code here
            $.mobile.activeBtnClass = "active-button";
            $.mobile.activePageClass = "ui-page-active";
            $.mobile.ajaxEnabled = "true";
            $.mobile.allowCrossDomainPages = "false";
            $.mobile.autoInitializePage = "true";
            $.mobile.defaultPageTransition = "slide";
            $.mobile.defaultDialogTransition = "pop";
            $.mobile.hashListeningEnabled = "true";
            $.mobile.loadingMessage = "Working on it...";
            $.mobile.minScrollBack = 250;
            $.mobile.nonHistorySelectors = "dialog";
            $.mobile.pageLoadErrorMessage = "This is rather embarrasing, something went wrong...";
            $.mobile.subPageUrlKey = "ui-page";
            $.mobile.touchOverflowEnabled = "true";
            $.mobile.linkBindingEnabled = "true";
            $.mobile.touchOverflowZoomEnabled = "false";
            $.mobile.page.prototype.options.addBackBtn = "false";
            $.mobile.page.prototype.options.backBtnTheme = "b";
            $.mobile.page.prototype.options.headerTheme = "b";
            $.mobile.page.prototype.options.footerTheme = "b";
        });
    </script>