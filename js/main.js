document.addEventListener('DOMContentLoaded', function(){
  var btn = document.querySelector('.menu-toggle');
  var nav = document.querySelector('.nav');
  if(btn && nav){
    btn.addEventListener('click', function(){
      nav.classList.toggle('active');
    });
  }

  var form = document.querySelector('.contact-form');
  if(form){
    form.addEventListener('submit', function(e){
      e.preventDefault();
      var btn = form.querySelector('button[type="submit"]');
      var orig = btn.innerHTML;
      // create or reuse success message container
      var msg = form.querySelector('.form-success');
      if(!msg){
        msg = document.createElement('div');
        msg.className = 'form-success';
        msg.setAttribute('role','status');
        msg.setAttribute('aria-live','polite');
        form.parentNode.insertBefore(msg, form);
      }

      btn.disabled = true;
      btn.innerHTML = 'Message envoyé ✓';
      msg.textContent = 'Merci — votre message a bien été envoyé. Nous vous répondrons sous 24h ouvrées.';
      msg.classList.remove('hidden');

      setTimeout(function(){
        btn.disabled = false;
        btn.innerHTML = orig;
        form.reset();
        // hide message after a few seconds
        msg.classList.add('hidden');
      }, 2200);
    });
  }

  // CTA banner smooth scroll
  var ctabtn = document.querySelector('.cta-banner .btn');
  if(ctabtn){
    ctabtn.addEventListener('click', function(e){
      e.preventDefault();
      var target = document.querySelector('#contact');
      if(target) target.scrollIntoView({behavior:'smooth', block:'start'});
    });
  }
});