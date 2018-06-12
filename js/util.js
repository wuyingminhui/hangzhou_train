var debug_url = "http://localhost:8080"

$(document).ready(function () {
  var ui = Cookies.getJSON('userinfo')
  if (ui == null || ui == {}){
    window.location.href = 'file:///Users/pg/Downloads/201601091015390/login.html'
  }
  var role = ui.roleid
  if (role == 0) {
  } else if (role == 1) {
    $("#Manage").css('display','none');
    $("#uploadfile").css('display','none');
  } else if (role == 2) {
    $("#Manage").css('display','none');
    $("#allfile").css('display','none');
    $("#AddNote").css('display','none');
  }
});

function getUI () {
  var ui = Cookies.getJSON('userinfo')
  return ui
}

function logout () {
  Cookies.remove('userinfo');
  window.location.reload();
}

function addNotice (title, des, id ,name, url) {
  $.post(debug_url + '/notice/add', { title: title, description: des, id: id, name: name },
  function (data) {
    // console.log(data)
    window.location.href = url
  })
}

function addFile(filename, chooseT, url) {
  console.log('addFile')
  // $.post(debug_url + '/file/add', { filename: filename, chooseT: chooseT},
  // function (data) {
  //   // console.log(data)
  //   window.location.href = url
  // })
}

function addTeacher (name, phoneNo, psd, url) {
  $.post(debug_url + '/teacher/add', { name: name, phoneNo: phoneNo, psd: psd},
  function (data) {
    // console.log(data)
    window.location.href = url
  })
}

function addClass(classname, chooseT, url) {
  $.post(debug_url + '/class/add', { classname: classname, chooseT: chooseT},
  function (data) {
    // console.log(data)
    window.location.href = url
  })
}

function addStudent(username, phoneNum, addS, psd, url) {
  $.post(debug_url + '/student/add', { username: username, phoneNum: phoneNum, addS: addS, psd: psd },
  function (data) {
    // console.log(data)
    window.location.href = url
  })
}

function getTeachers (form) {
  var optionstring="";
  $("#chooseT").empty(); 
  $.get(debug_url + '/teacher/all',
  function (data) {    
    $.each(data.data,function(key,value){  //循环遍历后台传过来的json数据
      optionstring += "<option value=\"" + value.id + "\" >" + value.name + "</option>"; 
      // console.log(optionstring)
    });
    var ss = "<option value=''>请选择老师</option> "+optionstring
    // console.log(ss)
    $("#chooseT").html(ss);
    form.render('select','selFilter');
  })
}

function getClasses (form) {
  var optionstring="";
  $("#addS").empty(); 
  $.get(debug_url + '/class/all',
  function (data) {    
    $.each(data.data,function(key,value){  //循环遍历后台传过来的json数据
      optionstring += "<option value=\"" + value.id + "\" >" + value.classname + "</option>"; 
      // console.log(optionstring)
    });
    var ss = "<option value=''>请选择班级</option> "+optionstring
    // console.log(ss)
    $("#addS").html(ss);
    form.render('select','selFilters');
  })
}