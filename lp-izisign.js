'use strict';
var frontendKit = require('./frontend/utils');

jQuery('#carousel_mensal').owlCarousel({
    autoplay: false,
    lazyLoad: true,
    loop: false,
    autoplayTimeout: 7000,
    smartSpeed: 800,
    nav: false,
    dots: true,
    responsive: {
        0: {
            items: 1,
            margin: 25,
        },
        768: {
            items: 2,
            margin: 18,
        },
        1200: {
            items: 3,
            margin: 18,
        },
        1366: {
            items: 4,
            margin: 18,
        }
    }
})

Number.prototype.format = function (n) {
    var r = new RegExp('\\d(?=(\\d{3})+' + (n > 0 ? '\\.' : '$') + ')', 'g');
    return this.toFixed(Math.max(0, Math.floor(n))).replace(r, '$&.');
};

$('.count').each(function () {
    $(this).prop('counter', 0).animate({
        counter: $(this).text()
    }, {
        duration: 2000,
        step: function (step) {
            $(this).text('' + step.format());
        }
    });
});

//ARRAYS MENSAL
const targetAudience = [
    "Para quem precisa assinar documentos pontualmente.",
    "Para profissionais autônomos com baixa demanda de assinaturas.",
    "Para pequenas e médias empresas com alto volume de assinaturas.",
    "Para empresas de médio e grande portes, com alto volume de assinatura de documento"
];
const technicalFeatures = [
    `<ul class="list-type-check">
        <li>1 usuário - até 3 documentos com 1 assinatura ou 1 documento com até 10
        assinaturas.</li>
        <li>15GB para armazenar seus documentos.</li>
        <li>Validade de 30 dias.</li>
    </ul>`,
    `<ul class="list-type-check">
        <li>2 usuários - até 30 documentos com 1 assinatura ou 10 documentos com até 10
        assinaturas.</li>
        <li>15GB para armazenar seus documentos.</li>
        <li>Validade de 30 dias.</li>
    </ul>`,
    `<ul class="list-type-check">
        <li>5 usuários - até 60 documentos com 1 assinatura ou 20 documentos com até 10
        assinaturas.</li>
        <li>20GB para armazenar seus documentos.</li>
        <li>Validade de 30 dias.</li>
    </ul>`,
    `<ul class="list-type-check">
        <li>15 usuários - até 120 documentos com 1 assinatura ou 40 documentos com até 30
        assinaturas.</li>
        <li>40GB para armazenar seus documentos.</li>
        <li>Validade de 30 dias.</li>
    </ul>`,
];
const tagContents = [ "Economize 25%", "Economize 31%", "Economize 39%", "Economize 50%" ];
const lineThroughContents = [ "R$64,50", "R$129,00", "R$258,00", "R$516,00" ];
const valueContents = [
    `R$48<small>,40<span>/mês</span></small>`,
    `R$89<small>,10<span>/mês</span></small>`,
    `R$157<small>,40<span>/mês</span></small>`,
    `R$258<small>,00<span>/mês</span></small>`
];

//ARRAYS AVULSO
const targetAudienceAvulso = [
    "Para quem precisa assinar documentos pontualmente.",
    "Para profissionais autônomos com baixa demanda de assinaturas.",
    "Para pequenas e médias empresas com alto volume de assinaturas.",
    "Para empresas de médio e grande portes, com alto volume de assinatura de documentos e usuários."
];
const technicalFeaturesAvulso = [
    `<ul class="list-type-check">
        <li>1 usuário - até 3 documentos com 1 assinatura ou 1 documento com até 10 assinaturas.</li>
        <li>15GB para armazenar seus documentos.</li>
        <li>Validade de 12 meses.</li>
    </ul>`,
    `<ul class="list-type-check">
        <li>1 usuário - até 15 documentos com 1 assinatura ou 5 documentos com até 10 assinaturas.</li>
        <li>15GB para armazenar seus documentos.</li>
        <li>Validade de 12 meses.</li>
    </ul>`,
    `<ul class="list-type-check">
        <li>3 usuários - até 45 documentos com 1 assinatura ou 15 documentos com até 10 assinaturas.</li>
        <li>20GB para armazenar seus documentos.</li>
        <li>Validade de 12 meses.</li>
    </ul>`,
    `<ul class="list-type-check">
        <li>5 usuários - até 90 documentos com 1 assinatura ou 30 documentos com até 10 assinaturas.</li>
        <li>40GB para armazenar seus documentos.</li>
        <li>Validade de 12 meses.</li>
    </ul>`
];
const tagContentsAvulso = [ "", "Economize 10%", "Economize 15%", "Economize 20%" ];
const lineThroughContentsAvulso = [ "", "R$64,50", "R$193,50", "R$387,00 " ];
const valueContentsAvulso = [
    `R$12<small>,90<span>/mês</span></small>`,
    `R$58<small>,05<span>/mês</span></small>`,
    `R$164<small>,40<span>/mês</span></small>`,
    `R$309<small>,60<span>/mês</span></small>`
];

const target = document.querySelectorAll('.nicho')
const features = document.querySelectorAll('.caracteristicas')
const tags = document.querySelectorAll(".tag");
const lineThrough = document.querySelectorAll(".line-through");
const values = document.querySelectorAll(".valor");
const switchMensal = document.getElementById('switchMensal');
const switchAvulso = document.getElementById('switchAvulso');
switchMensal.addEventListener('change', toggleInputs);
switchAvulso.addEventListener('change', toggleInputs);

const mensal = () => {
    target.forEach((nicho, index) => {
        nicho.innerHTML = targetAudience[index % targetAudience.length];
    });

    features.forEach((feature, index) => {
        feature.innerHTML = technicalFeatures[index % technicalFeatures.length];
    });

    tags.forEach((tag, index) => {
        tag.innerHTML = tagContents[index % tagContents.length];
    });
    
    lineThrough.forEach((line, index) => {
        line.innerHTML = lineThroughContents[index % lineThroughContents.length];
    });
    
    values.forEach((value, index) => {
        value.innerHTML = valueContents[index % valueContents.length];
    });
}

const avulso = () => {
    target.forEach((nicho, index) => {
        nicho.innerHTML = targetAudienceAvulso[index % targetAudienceAvulso.length];
    });

    features.forEach((feature, index) => {
        feature.innerHTML = technicalFeaturesAvulso[index % technicalFeaturesAvulso.length];
    });

    tags.forEach((tag, index) => {
        tag.innerHTML = tagContentsAvulso[index % tagContentsAvulso.length];
    });
    
    lineThrough.forEach((line, index) => {
        line.innerHTML = lineThroughContentsAvulso[index % lineThroughContentsAvulso.length];
    });
    
    values.forEach((value, index) => {
        value.innerHTML = valueContentsAvulso[index % valueContentsAvulso.length];
    });
}

function toggleInputs() {
  if (switchMensal.checked) {
    mensal();
  } else if (switchAvulso.checked) {
    avulso();
  }
}
toggleInputs(); 

const ctaButton = document.querySelector('.cta-form');
ctaButton.addEventListener('click', () => {
  const inputName = document.querySelector('#name');
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });

  window.addEventListener('scroll', function scrollToTop() {
    if (window.scrollY === 0) {
      // Remove o ouvinte de eventos
      window.removeEventListener('scroll', scrollToTop);
      inputName.focus();
    }
  });
});
