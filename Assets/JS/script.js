$(function () {
  var today = dayjs();
  var currentHour = dayjs().hour();

  // Listener for click events on the save button.
  $("button").click(function (event) {
    event.preventDefault();
    var userInput = $(this).prev().val();
    var hourBlockInput = $(this).parent().attr("id");
    localStorage.setItem(hourBlockInput, userInput);
  });
  // Applies the past, present, or future class to each time
  // block by comparing the id to the current hour. 
  $(function hourColor() {
    $(".time-block").each(function () {
      var hourBlock = parseInt(this.id);
      $(this).toggleClass("past", hourBlock < currentHour);
      $(this).toggleClass("present", hourBlock === currentHour);
      $(this).toggleClass("future", hourBlock > currentHour);
    });
  });

  // Gets any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. 
  $(function populateSchedule(){
    $("textarea").each(function () {
      const taid = $(this).attr("id")
      var checkStorage = localStorage.getItem(taid)
      if (checkStorage) {
        $(this).val(checkStorage)
      }
    })
  })


  // Code to display the current date in the header of the page.
  $("#currentDay").text(today.format("MMM D, YYYY, hh:mm:ss"));
  setInterval(currentHour, 1000);
});

