$(function(){
    $("button.fc-faq-header").on( "click", function( event ) {
        $(".fc-faq-contents").toggle();
      });

      var $manageOptions = $(".fc-button.fc-cta-manage-options");
      var $choiceDialog = $(".fc-dialog.fc-choice-dialog");
      var $prefernceDialog = $(".fc-dialog.fc-data-preferences-dialog");
      var $prefernceDialogBack = $(".fc-dialog-header-back-button.fc-data-preferences-back");
      var $manageVentors = $(".fc-navigation-button.fc-manage-vendors");
      var $ventorsDialog = $(".fc-dialog.fc-vendor-preferences-dialog");
      var $ventorsDialogBack = $(".fc-dialog-header-back-button.fc-vendor-preferences-back");
      var $helpLink = $(".fc-purpose-feature-more-info");
      var $helpDialog = $(".fc-help-dialog-container");
      var $helpDialogClose = $(".fc-help-dialog-close-button-label");

      var $consentButton = $(".fc-preference-slider-container.fc-consent-preference-container");

      $manageOptions.on( "click", function( event ) {
        $choiceDialog.toggle();
        $prefernceDialog.toggle();
      });
      $prefernceDialogBack.on( "click", function( event ) {
        $choiceDialog.toggle();
        $prefernceDialog.toggle();
      });

      $manageVentors.on( "click", function( event ) {
        $prefernceDialog.toggle();
        $ventorsDialog.toggle();
      });
      $ventorsDialogBack.on( "click", function( event ) {
        $prefernceDialog.toggle();
        $ventorsDialog.toggle();
      });

      $helpLink.on( "click", function( event ) {
        var title = $(this).attr("data-name");
        var description = $(this).attr("data-legal-description");
        
        console.log(title, description)

        $helpDialog.find(".fc-help-dialog h1").text(title);
        console.log( $helpDialog.find(".fc-help-dialog h2"));
        
        //.text(title);
        $helpDialog.find(".fc-help-dialog-contents").text(description);
        $helpDialog.show();
        
      });
      $helpDialogClose.on( "click", function( event ) {
        $helpDialog.hide();
      });

      $consentButton.on( "click", function( event ) {
        var choice = $(this).find("intput");
        console.log(choice.is(":checked"));
        //alert("Consent");
      })

})