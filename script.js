let status = "off";




function darkMode(){
if (status === "off"){
      document.getElementById('body').style.backgroundColor="#14233D";
      document.getElementById('body').style.color="#aae7fe";



      let z = document.getElementsByClassName('section-heading');
      for (let i = 0; i < z.length; i++) {
        z[i].style.color="#0ed2dd";
    }

      let x = document.getElementsByClassName('section-subtitle');
      for (let i = 0; i < x.length; i++) {
        x[i].style.color="#a7afaf";
    }


    let y = document.getElementsByClassName('section-description');
    for (let i = 0; i < y.length; i++) {
      y[i].style.color="#aae7fe";
      }

    //
    let c = document.getElementsByClassName('card-body');
    for (let i = 0; i < c.length; i++) {
      c[i].style.backgroundColor="#14233D";
    }

    document.getElementById('nav').style.backgroundColor="#14233D";

    let n = document.getElementsByClassName('nav-link');
    for (let i = 0; i < n.length; i++) {
      n[i].style.color="#aae7fe";
    }

    let nb = document.getElementsByClassName('navbar-brand');
    for (let i = 0; i < nb.length; i++) {
      nb[i].style.color="#aae7fe";
    }

    let jb = document.getElementsByClassName('jsbutton');
    for (let i = 0; i < jb.length; i++) {
      jb[i].style.backgroundColor="#22787c";
    }

    let utb = document.getElementsByClassName('used-tech-box');
    for (let i = 0; i < utb.length; i++) {
      utb[i].style.backgroundColor="#22787c";
    }

    let qi = document.getElementsByClassName('Qualification-institute');
    for (let i = 0; i < qi.length; i++) {
      qi[i].style.color="#a7afaf";
    }

    let qd = document.getElementsByClassName('Qualification-date');
    for (let i = 0; i < qd.length; i++) {
      qd[i].style.color="#a7afaf";
    }
    let qdl = document.getElementsByClassName('Qualification-description-list');
    for (let i = 0; i < qdl.length; i++) {
      qdl[i].style.color="#a7afaf";
    }

    let qr = document.getElementsByClassName('qualification-rounder');
    for (let i = 0; i < qr.length; i++) {
      qr[i].style.backgroundColor="#5b7a7b";
    }

    let ql = document.getElementsByClassName('qualification-line');
    for (let i = 0; i < ql.length; i++) {
      ql[i].style.backgroundColor="#5b7a7b";
    }

    let fl = document.getElementsByClassName('footerlink');
    for (let i = 0; i < fl.length; i++) {
      fl[i].style.color="#0ed2dd";
    }
  status = "on";
}
else{
    document.getElementById('body').style.backgroundColor="#FBFCFE";
    document.getElementById('body').style.color="#000";



    let z = document.getElementsByClassName('section-heading');
    for (let i = 0; i < z.length; i++) {
      z[i].style.color="#232529";
    }

    let x = document.getElementsByClassName('section-subtitle');
    for (let i = 0; i < x.length; i++) {
      x[i].style.color="#6a707c";
    }


    let y = document.getElementsByClassName('section-description');
    for (let i = 0; i < y.length; i++) {
    y[i].style.color="#172236";
    }

    //
    let c = document.getElementsByClassName('card-body');
    for (let i = 0; i < c.length; i++) {
    c[i].style.backgroundColor="#FBFCFE";
    }

    document.getElementById('nav').style.backgroundColor="#f8f9fa";

    let n = document.getElementsByClassName('nav-link');
    for (let i = 0; i < n.length; i++) {
    n[i].style.color="#2d4d86";
    }

    let nb = document.getElementsByClassName('navbar-brand');
    for (let i = 0; i < nb.length; i++) {
    nb[i].style.color="#2d4d86";
    }

    let jb = document.getElementsByClassName('jsbutton');
    for (let i = 0; i < jb.length; i++) {
    jb[i].style.backgroundColor="#264273";
    }

    let utb = document.getElementsByClassName('used-tech-box');
    for (let i = 0; i < utb.length; i++) {
    utb[i].style.backgroundColor="#264273";
    }

    let qi = document.getElementsByClassName('Qualification-institute');
    for (let i = 0; i < qi.length; i++) {
    qi[i].style.color="#6a707c";
    }

    let qd = document.getElementsByClassName('Qualification-date');
    for (let i = 0; i < qd.length; i++) {
    qd[i].style.color="#6a707c";
    }
    let qdl = document.getElementsByClassName('Qualification-description-list');
    for (let i = 0; i < qdl.length; i++) {
    qdl[i].style.color="#172236";
    }

    let qr = document.getElementsByClassName('qualification-rounder');
    for (let i = 0; i < qr.length; i++) {
    qr[i].style.backgroundColor="#264273";
    }

    let ql = document.getElementsByClassName('qualification-line');
    for (let i = 0; i < ql.length; i++) {
    ql[i].style.backgroundColor="#264273";
    }

    let fl = document.getElementsByClassName('footerlink');
    for (let i = 0; i < fl.length; i++) {
    fl[i].style.color="#264273";
    }
    status = "off";
}
}
