$('.ui.modal.login').modal('attach events', '.login.button');
console.log("loading sticky");
$('.ui.sticky').sticky({context: '#content', observeChanges:true, offset:50});
console.log("sticky loaded");
tinymce.init({
    selector: '#newblogpost',
    theme: 'modern',
    plugins: 'print preview searchreplace autolink directionality visualblocks visualchars fullscreen image link media template codesample table charmap hr pagebreak nonbreaking anchor toc insertdatetime advlist lists textcolor wordcount imagetools contextmenu colorpicker textpattern help',
    toolbar1: 'fontselect | formatselect | bold italic strikethrough forecolor backcolor | link | alignleft aligncenter alignright alignjustify  | numlist bullist outdent indent  | removeformat',
});