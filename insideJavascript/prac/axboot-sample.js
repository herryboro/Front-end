var options = [];
for (var i = 0; i < 100; i++) {
  options.push({ value: 'optionValue' + i, text: 'optionText' + i });
}
$(document.body).ready(function () {
  $('[data-ax5select]').ax5select({
    options: options
  });
});
