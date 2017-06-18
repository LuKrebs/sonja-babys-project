app.controller('MainController', ['$scope', function($scope) { 

  $scope.tiaras = [
    {
      name: "Anne",
      price: 16.90,
      ref: 01020,
      quantidade: 4,
      cover: "img/tiaras/Anne (1).JPG",
      coverTwo: "img/tiaras/Anne (2).JPG",
      page: "anne.html",
      description: "Tiara encapada com cetim. Flores em chiffon com brilho ou no próprio cetim, ricamente contornadas com pérolas e strass, assim como os miolos."
    },
    {
      name: "Anne",
      price: 16.90,
      ref: 01020,
      quantidade: 4,
      cover: "img/tiaras/Anne (3).JPG",
      coverTwo: "img/tiaras/Anne (4).JPG",
      page: "anne.html",
      description: "Tiara encapada com cetim. Flores em chiffon com brilho ou no próprio cetim, ricamente contornadas com pérolas e strass, assim como os miolos."
    },
    {
      name: "Carolina",
      price: 16.90,
      ref: 01020,
      quantidade: 4,
      cover: "img/tiaras/Carolina (1).JPG",
      coverTwo: "img/tiaras/Carolina (2).JPG",
      page: "carolina.html",
      description: "Tiara encapada manualmente com cetim, flor com pétalas duplas também em cetim, folha bordada com pérolas e strass."
    },
    {
      name: "Dani",
      price: 16.90,
      ref: 01020,
      quantidade: 4,
      cover: "img/tiaras/Dani (1).JPG",
      coverTwo: "img/tiaras/Dani (2).JPG",
      page: "dani.html",
      description: "Tiara encapada manualmente com cetim, laço sofisticado em paetê, com ponta única."
    },
    {
      name: "Denise",
      price: 18.90,
      quantidade: 4,
      ref: 01010,
      cover: "img/tiaras/Denise (1).JPG",
      coverTwo: "img/tiaras/Denise (2).JPG",
      page: "denise.html",
      description: "Tiara encapada com cetim. Flores ricamente bordadas com pérolas e strass e miolo podendo ser craquelado."
    },
    {
      name: "Denise",
      price: 18.90,
      ref: 01010,
      quantidade: 4,
      cover: "img/tiaras/Denise (3).JPG",
      coverTwo: "img/tiaras/Denise (4).JPG",
      page: "denise.html",
      description: "Tiara encapada com cetim. Flores ricamente bordadas com pérolas e strass e miolo podendo ser craquelado."
    },
    {
      name: "Gisele",
      price: 16.90,
      ref: 01020,
      quantidade: 4,
      cover: "img/tiaras/Gisele (1).JPG",
      coverTwo: "img/tiaras/Gisele (2).JPG",
      page: "gisele.html",
      description: "Tiara encapada manualmente com cetim e renda, miolo bordado com pérolas e strass."
    },
    {
      name: "Gisele",
      price: 16.90,
      ref: 01020,
      quantidade: 4,
      cover: "img/tiaras/Gisele (3).JPG",
      coverTwo: "img/tiaras/Gisele (4).JPG",
      page: "gisele.html",
      description: "Tiara encapada manualmente com cetim e renda, miolo bordado com pérolas e strass."
    },
    {
      name: "Helena",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Helena (1).JPG",
      coverTwo: "img/tiaras/Helena (2).JPG",
      page: "helena.html",
      description: "Tiara encapada manual em cetim. Pétalas em organza com adorno de cordões acetinados."
    },
    {
      name: "Helena",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Helena (3).JPG",
      coverTwo: "img/tiaras/Helena (4).JPG",
      page: "helena.html",
      description: "Tiara encapada manual em cetim. Pétalas em organza com adorno de cordões acetinados."
    },
    {
      name: "Jacira",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Jacira (1).JPG",
      coverTwo: "img/tiaras/Jacira (2).JPG",
      page: "jacira.html",
      description: "Tiara encapada manual. Pétalas em cetim, com organza, miolo bordado com pérolas e strass."
    },
    {
      name: "Jacira",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Jacira (3).JPG",
      coverTwo: "img/tiaras/Jacira (4).JPG",
      page: "jacira.html",
      description: "Tiara encapada manual. Pétalas em cetim, com organza, miolo bordado com pérolas e strass."
    },
    {
      name: "Lara",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Lara (1).JPG",
      coverTwo: "img/tiaras/Lara (2).JPG",
      page: "lara.html",
      description: "Tiara encapada manualmente com cetim, adornada com delicadas flores também em cetim, com miolo de strass."
    },
    {
      name: "Larissa",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Larissa (1).JPG",
      coverTwo: "img/tiaras/Larissa (2).JPG",
      page: "larissa.html",
      description: "Tiara encapada manualmente com cetim, flores em renda e miolos bordados com pérolas e strass."
    },
    {
      name: "Lize",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Lize (1).JPG",
      coverTwo: "img/tiaras/Lize (2).JPG",
      page: "lize.html",
      description: "Tiara encapada manualmente, flores com pétalas duplas e miolo bordado com pérolas e strass."
    },
    {
      name: "Lize",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Lize (3).JPG",
      coverTwo: "img/tiaras/Lize (4).JPG",
      page: "lize.html",
      description: "Tiara encapada manualmente, flores com pétalas duplas e miolo bordado com pérolas e strass."
    },
    {
      name: "Luana",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Luana (1).JPG",
      coverTwo: "img/tiaras/Luana (2).JPG",
      page: "luana.html",
      description: "Tiara encapada manualmente com cetim, flores pequenas em cetim fosco, dispostas em delicado arranjo."
    },
    {
      name: "Lúcia",
      price: 18.90,
      quantidade: 4,
      ref: 01010,
      cover: "img/tiaras/Lucia (1).JPG",
      coverTwo: "img/tiaras/Lucia (2).JPG",
      page: "lucia.html",
      description: "Tiara encapada com cetim, enfeitada com delicadas flores em cetim e toda bordada com strass e pérolas."
    },
    {
      name: "Lúcia",
      price: 18.90,
      quantidade: 4,
      ref: 01010,
      cover: "img/tiaras/Lucia (3).JPG",
      coverTwo: "img/tiaras/Lucia (4).JPG",
      page: "lucia.html",
      description: "Tiara encapada com cetim, enfeitada com delicadas flores em cetim e toda bordada com strass e pérolas."
    },
    {
      name: "Lúcia",
      price: 18.90,
      quantidade: 4,
      ref: 01010,
      cover: "img/tiaras/Lucia (5).JPG",
      coverTwo: "img/tiaras/Lucia (6).JPG",
      page: "lucia.html",
      description: "Tiara encapada com cetim, enfeitada com delicadas flores em cetim e toda bordada com strass e pérolas."
    },
    {
      name: "Luciane",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Luciane (1).JPG",
      coverTwo: "img/tiaras/Luciane (2).JPG",
      page: "luciane.html",
      description: "Tiara encapada manualmente com cetim, flores em voil, com miolos bordados em pérola e strass."
    },
    {
      name: "Lucila",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Lucila (1).JPG",
      coverTwo: "img/tiaras/Lucila (2).JPG",
      page: "lucila.html",
      description: "Tiara encapada com cetim. Pétalas minúsculas em chiffon mesclado com brilho. Miolo bordado com pérola e strass."
    },
    {
      name: "Mariana",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Mariana (1).JPG",
      coverTwo: "img/tiaras/Mariana (2).JPG",
      page: "mariana.html",
      description: "Tiara encapada manualmente com cetim, pétalas assimétricas, com miolo bordado com pérolas e strass."
    },
    {
      name: "Mell",
      price: 18.90,
      quantidade: 4,
      ref: 01010,
      cover: "img/tiaras/Mell (1).JPG",
      coverTwo: "img/tiaras/Mell(2).JPG",
      page: "mell.html",
      description: "Tiara encapada e bordada à mão. Laço duro, forrado em paetê. Detalhe em strass."
    },
    {
      name: "Morena",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Morena (1).JPG",
      coverTwo: "img/tiaras/Morena(2).JPG",
      page: "morena.html",
      description: "Tiara encapada em cetim, pétalas sobrepostas também em cetim. Miolo bordado com pétalas e strass."
    },
    {
      name: "Rose",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Rose (1).JPG",
      coverTwo: "img/tiaras/Rose (2).JPG",
      page: "rose.html",
      description: "Tiaras encapadas manualmente, com cetim, lações sofisticados em paetê."
    },
    {
      name: "Rose",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Rose (3).JPG",
      coverTwo: "img/tiaras/Rose (4).JPG",
      page: "rose.html",
      description: "Tiaras encapadas manualmente, com cetim, lações sofisticados em paetê."
    },
    {
      name: "Sofia",
      price: 18.90,
      quantidade: 4,
      ref: 01010,
      cover: "img/tiaras/Sofia (1).JPG",
      coverTwo: "img/tiaras/Sofia (2).JPG",
      page: "sofia.html",
      description: "Tiara encapada manualmente com cetim, flores ricamente bordadas com pérolas e strass."
    },
    {
      name: "Yasmin",
      price: 16.90,
      quantidade: 4,
      ref: 01020,
      cover: "img/tiaras/Yasmin (1).JPG",
      coverTwo: "img/tiaras/Yasmin (2).JPG",
      page: "yasmin.html",
      description: "Tiara encapada manualmente com cetim, flores em cetim, com pétalas duplas e miolo bordado em pérolas e strass."
    }
  ];

  $scope.bicos = [
    {
      name: "Esmeralda",
      price: 9.90,
      ref: 03091,
      quantidade: 4,
      cover: "img/bico de pato/Esmeralda (1).JPG",
      coverTwo: "img/bico de pato/Esmeralda (2).JPG",
      page: "esmeralda.html",
      description: "Bico de pato com flores em organza cristal, miolo bordado em pérolas."
    },
    {
      name: "Jade",
      price: 12.90,
      ref: 03010,
      quantidade: 4,
      cover: "img/bico de pato/Jade (1).JPG",
      coverTwo: "img/bico de pato/Jade (2).JPG",
      page: "jade.html",
      description: "Bico de pato em cetim bordado à mão com strass e pérola."
    },
    {
      name: "Jade",
      price: 12.90,
      ref: 03010,
      quantidade: 4,
      cover: "img/bico de pato/Jade (3).JPG",
      coverTwo: "img/bico de pato/Jade (4).JPG",
      page: "jade.html",
      description: "Bico de pato em cetim bordado à mão com strass e pérola."
    },
    {
      name: "Onix",
      price: 11.90,
      ref: 03090,
      quantidade: 4,
      cover: "img/bico de pato/Onix (1).JPG",
      coverTwo: "img/bico de pato/Onix (2).JPG",
      page: "onix.html",
      description: "Bico de pato com laço em paetê."
    },
    {
      name: "Rubi",
      price: 12.90,
      ref: 03010,
      quantidade: 4,
      cover: "img/bico de pato/Rubi (1).JPG",
      coverTwo: "img/bico de pato/Rubi (2).JPG",
      page: "rubi.html",
      description: "Bico de pato bordado à mão, com pérolas e strass."
    },
    {
      name: "Safira",
      price: 11.90,
      ref: 03090,
      quantidade: 4,
      cover: "img/bico de pato/Safira (1).JPG",
      coverTwo: "img/bico de pato/Safira (2).JPG",
      page: "safira.html",
      description: "Bico de pato com delicadas flores em cetim fosco."
    },
    {
      name: "Safira",
      price: 11.90,
      ref: 03010,
      quantidade: 4,
      cover: "img/bico de pato/Safira (3).JPG",
      coverTwo: "img/bico de pato/Safira (4).JPG",
      page: "safira.html",
      description: "Bico de pato com delicadas flores em cetim fosco."
    },
    {
      name: "Topázio",
      price: 12.90,
      quantidade: 4,
      cover: "img/bico de pato/Topazio (1).JPG",
      coverTwo: "img/bico de pato/Topazio (2).JPG",
      page: "topazio.html",
      description: "Bico de pato com delicadas flores em cetim fosco."
    }
  ];

  $scope.calcinhas = [
    {
      name: "Calcinha com faixa",
      price: 29.60,
      ref: 05000,
      quantidade: 4,
      cover: "img/calcinhas/Calcinha (1).JPG",
      //coverTwo: 
      page: "calcinhas.html",
      description: "Calcinha em cetim, bordada à mão, acompanha faixa em meia de seda com mesmo detalhe."
    },
    {
      name: "Calcinha com faixa",
      price: 29.60,
      ref: 05000,
      quantidade: 4,
      cover: "img/calcinhas/Calcinha (2).JPG",
      //coverTwo: 
      page: "calcinhas.html",
      description: "Calcinha em cetim, bordada à mão, acompanha faixa em meia de seda com mesmo detalhe."
    }
  ];

  $scope.sapatinhos = [
    {
      name: "Delicado",
      price: 28.90,
      ref: 04021,
      quantidade: 4,
      cover: "img/sapatinhos/Delicado (1).JPG",
      coverTwo: "img/sapatinhos/Delicado (2).JPG",
      page: "delicado.html",
      description: "Sapatinho em tricô. Aplicações manuais com bordado em pérola e strass. Faixa em meia de seda, com mesmos detalhes."
    },
    {
      name: "Fashion",
      price: 28.90,
      ref: 04021,
      quantidade: 4,
      cover: "img/sapatinhos/Fashion (1).JPG",
      coverTwo: "img/sapatinhos/Fashion (2).JPG",
      page: "fashion.html",
      description: "Sapatinho em tricô com aplicações bordadas à mão, com pérolas, strass e lantejoulas. Faixa em meia de seda com os mesmos detalhes."
    },
    {
      name: "Ternura",
      price: 28.90,
      ref: 04021,
      quantidade: 4,
      cover: "img/sapatinhos/Ternura (1).JPG",
      coverTwo: "img/sapatinhos/Ternura (2).JPG",
      page: "ternura.html",
      description: "Sapatinho em tricô, detalhe com lacinho cata-vento em fita de veludo, bordado com strass e pérola. Faixa em meia de seda com os mesmos detalhes."
    }
  ];

  $scope.suspensorios = [
    {
      name: "Suspensório",
      price: 13.90,
      ref: 10001,
      quantidade: 4,
      cover: "img/suspensorios/Suspensorio (1).JPG",
      coverTwo: "img/suspensorios/Suspensorio (2).JPG",
      coverThree: "img/suspensorios/Suspensorio (3).JPG",
      page: "suspensorio.html",
      description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
    },
    {
      name: "Suspensório",
      price: 13.90,
      ref: 10001,
      quantidade: 4,
      cover: "img/suspensorios/Suspensorio (4).JPG",
      page: "suspensorio.html",
      description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
    },
    {
      name: "Suspensório",
      price: 13.90,
      ref: 10001,
      quantidade: 4,
      cover: "img/suspensorios/Suspensorio (5).JPG",
      page: "suspensorio.html",
      description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
    }
  ];

  $scope.gravatas = [
    {
      name: "Borboleta",
      price: 6.20,
      ref: 07001,
      quantidade: 4,
      cover: "img/gravatas/Borboleta (1).JPG",
      //coverTwo: 
      page: "borboleta.html",
      description: "Gravatinha borboleta para ocasião especial ou casual. Acabamento perfeito."
    },
    {
      name: "Borboleta",
      price: 6.20,
      ref: 07001,
      quantidade: 4,
      cover: "img/gravatas/Borboleta (2).JPG",
      //coverTwo: 
      page: "borboleta.html",
      description: "Gravatinha borboleta para ocasião especial ou casual. Acabamento perfeito."
    },
    {
      name: "Borboleta",
      price: 6.20,
      ref: 07001,
      quantidade: 4,
      cover: "img/gravatas/Borboleta (3).JPG",
      //coverTwo: 
      page: "borboleta.html",
      description: "Gravatinha borboleta para ocasião especial ou casual. Acabamento perfeito."
    },
    
    // Gravata borboleta ~> End

    // Gravata ~> Start
    {
      name: "Gravata",
      price: 8.70,
      ref: 07000,
      quantidade: 4,
      cover: "img/gravatas/Gravata (1).JPG",
      //coverTwo: 
      page: "gravata.html",
      description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
    },
    {
      name: "Gravata",
      price: 8.70,
      ref: 07000,
      quantidade: 4,
      cover: "img/gravatas/Gravata (2).JPG",
      //coverTwo: 
      page: "gravata.html",
      description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
    },
    {
      name: "Gravata",
      price: 8.70,
      ref: 07000,
      quantidade: 4,
      cover: "img/gravatas/Gravata (3).JPG",
      //coverTwo: 
      page: "gravata.html",
      description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
    },
    {
      name: "Gravata",
      price: 8.70,
      ref: 07000,
      quantidade: 4,
      cover: "img/gravatas/Gravata (4).JPG",
      //coverTwo: 
      page: "gravata.html",
      description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
    },
    {
      name: "Gravata",
      price: 8.70,
      ref: 07000,
      quantidade: 4,
      cover: "img/gravatas/Gravata (5).JPG",
      //coverTwo: 
      page: "gravata.html",
      description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
    },
    {
      name: "Gravata",
      price: 8.70,
      ref: 07000,
      quantidade: 4,
      cover: "img/gravatas/Gravata (6).JPG",
      //coverTwo: 
      page: "gravata.html",
      description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
    }
  ];
  
  // Tiaras ~> Start 
  $scope.anneOne = {
    name: "Anne",
    price: 16.90,
    quantidade: 4,
    ref: 01020,
    cover: "img/tiaras/Anne (1).JPG",
    coverTwo: "img/tiaras/Anne (2).JPG",
    page: "anne.html",
    color: "rgb(123, 95, 41)",
    description: "Tiara encapada com cetim. Flores em chiffon com brilho ou no próprio cetim, ricamente contornadas com pérolas e strass, assim como os miolos."
  };
  $scope.anneTwo = {
    name: "Anne",
    price: 16.90,
    quantidade: 4,
    ref: 01020,
    cover: "img/tiaras/Anne (3).JPG",
    coverTwo: "img/tiaras/Anne (4).JPG",
    page: "anne.html",
    color: "rgb(152, 36, 80)",
    description: "Tiara encapada com cetim. Flores em chiffon com brilho ou no próprio cetim, ricamente contornadas com pérolas e strass, assim como os miolos."
  }
  $scope.carolina = {
    name: "Carolina",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Carolina (1).JPG",
    coverTwo: "img/tiaras/Carolina (2).JPG",
    page: "carolina.html",
    description: "Tiara encapada manualmente com cetim, flor com pétalas duplas também em cetim, folha bordada com pérolas e strass."
  }
  $scope.dani = {
    name: "Dani",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Dani (1).JPG",
    coverTwo: "img/tiaras/Dani (2).JPG",
    page: "dani.html",
    description: "Tiara encapada manualmente com cetim, laço sofisticado em paetê, com ponta única."
  }
  $scope.deniseOne = {
    name: "Denise",
    price: 18.90,
    ref: 01010,
    quantidade: 4,
    cover: "img/tiaras/Denise (1).JPG",
    coverTwo: "img/tiaras/Denise (2).JPG",
    page: "denise.html",
    description: "Tiara encapada com cetim. Flores ricamente bordadas com pérolas e strass e miolo podendo ser craquelado."
  }
  $scope.deniseTwo = {
    name: "Denise",
    price: 18.90,
    ref: 01010,
    quantidade: 4,
    cover: "img/tiaras/Denise (3).JPG",
    coverTwo: "img/tiaras/Denise (4).JPG",
    page: "denise.html",
    description: "Tiara encapada com cetim. Flores ricamente bordadas com pérolas e strass e miolo podendo ser craquelado."
  }
  $scope.giseleOne = {
    name: "Gisele",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Gisele (1).JPG",
    coverTwo: "img/tiaras/Gisele (2).JPG",
    page: "gisele.html",
    description: "Tiara encapada manualmente com cetim e renda, miolo bordado com pérolas e strass."
  }
  $scope.giseleTwo = {
    name: "Gisele",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Gisele (3).JPG",
    coverTwo: "img/tiaras/Gisele (4).JPG",
    page: "gisele.html",
    description: "Tiara encapada manualmente com cetim e renda, miolo bordado com pérolas e strass."
  }
  $scope.helenaOne = {
    name: "Helena",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Helena (1).JPG",
    coverTwo: "img/tiaras/Helena (2).JPG",
    page: "helena.html",
    description: "Tiara encapada manual em cetim. Pétalas em organza com adorno de cordões acetinados."
  }
  $scope.helenaTwo = {
    name: "Helena",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Helena (3).JPG",
    coverTwo: "img/tiaras/Helena (4).JPG",
    page: "helena.html",
    description: "Tiara encapada manual em cetim. Pétalas em organza com adorno de cordões acetinados."
  }
  $scope.jaciraOne = {
    name: "Jacira",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Jacira (1).JPG",
    coverTwo: "img/tiaras/Jacira (2).JPG",
    page: "jacira.html",
    description: "Tiara encapada manual. Pétalas em cetim, com organza, miolo bordado com pérolas e strass."
  }
  $scope.jaciraTwo = {
    name: "Jacira",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Jacira (3).JPG",
    coverTwo: "img/tiaras/Jacira (4).JPG",
    page: "jacira.html",
    description: "Tiara encapada manual. Pétalas em cetim, com organza, miolo bordado com pérolas e strass."
  }
  $scope.lara = {
    name: "Lara",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Lara (1).JPG",
    coverTwo: "img/tiaras/Lara (2).JPG",
    page: "lara.html",
    description: "Tiara encapada manualmente com cetim, adornada com delicadas flores também em cetim, com miolo de strass."
  }
  $scope.larissa = {
    name: "Larissa",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Larissa (1).JPG",
    coverTwo: "img/tiaras/Larissa (2).JPG",
    page: "larissa.html",
    description: "Tiara encapada manualmente com cetim, flores em renda e miolos bordados com pérolas e strass."
  }
  $scope.lizeOne = {
    name: "Lize",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Lize (1).JPG",
    coverTwo: "img/tiaras/Lize (2).JPG",
    page: "lize.html",
    description: "Tiara encapada manualmente, flores com pétalas duplas e miolo bordado com pérolas e strass."
  }
  $scope.lizeTwo = {
    name: "Lize",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Lize (3).JPG",
    coverTwo: "img/tiaras/Lize (4).JPG",
    page: "lize.html",
    description: "Tiara encapada manualmente, flores com pétalas duplas e miolo bordado com pérolas e strass."
  }
  $scope.luana = {
    name: "Luana",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Luana (1).JPG",
    coverTwo: "img/tiaras/Luana (2).JPG",
    page: "luana.html",
    description: "Tiara encapada manualmente com cetim, flores pequenas em cetim fosco, dispostas em delicado arranjo."
  }
  $scope.luciaOne = {
    name: "Lúcia",
    price: 18.90,
    ref: 01010,
    quantidade: 4,
    cover: "img/tiaras/Lucia (1).JPG",
    coverTwo: "img/tiaras/Lucia (2).JPG",
    page: "lucia.html",
    description: "Tiara encapada com cetim, enfeitada com delicadas flores em cetim e toda bordada com strass e pérolas."
  }
  $scope.luciaTwo = {
    name: "Lúcia",
    price: 18.90,
    ref: 01010,
    quantidade: 4,
    cover: "img/tiaras/Lucia (3).JPG",
    coverTwo: "img/tiaras/Lucia (4).JPG",
    page: "lucia.html",
    description: "Tiara encapada com cetim, enfeitada com delicadas flores em cetim e toda bordada com strass e pérolas."
  }
  $scope.luciaThree = {
    name: "Lúcia",
    price: 18.90,
    ref: 01010,
    quantidade: 4,
    cover: "img/tiaras/Lucia (5).JPG",
    coverTwo: "img/tiaras/Lucia (6).JPG",
    page: "lucia.html",
    description: "Tiara encapada com cetim, enfeitada com delicadas flores em cetim e toda bordada com strass e pérolas."
  }
  $scope.luciane = {
    name: "Luciane",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Luciane (1).JPG",
    coverTwo: "img/tiaras/Luciane (2).JPG",
    page: "luciane.html",
    description: "Tiara encapada manualmente com cetim, flores em voil, com miolos bordados em pérola e strass."
  }
  $scope.lucila = {
    name: "Lucila",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Lucila (1).JPG",
    coverTwo: "img/tiaras/Lucila (2).JPG",
    page: "lucila.html",
    description: "Tiara encapada com cetim. Pétalas minúsculas em chiffon mesclado com brilho. Miolo bordado com pérola e strass."
  }
  $scope.mariana = {
    name: "Mariana",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Mariana (1).JPG",
    coverTwo: "img/tiaras/Mariana (2).JPG",
    page: "mariana.html",
    description: "Tiara encapada manualmente com cetim, pétalas assimétricas, com miolo bordado com pérolas e strass."
  }
  $scope.mell = {
    name: "Mell",
    price: 18.90,
    ref: 01010,
    quantidade: 4,
    cover: "img/tiaras/Mell (1).JPG",
    coverTwo: "img/tiaras/Mell(2).JPG",
    page: "mell.html",
    description: "Tiara encapada e bordada à mão. Laço duro, forrado em paetê. Detalhe em strass."
  }
  $scope.morena = {
    name: "Morena",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Morena (1).JPG",
    coverTwo: "img/tiaras/Morena(2).JPG",
    page: "morena.html",
    description: "Tiara encapada em cetim, pétalas sobrepostas também em cetim. Miolo bordado com pétalas e strass."
  }
  $scope.roseOne = {
    name: "Rose",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Rose (1).JPG",
    coverTwo: "img/tiaras/Rose (2).JPG",
    page: "rose.html",
    description: "Tiaras encapadas manualmente, com cetim, lações sofisticados em paetê."
  }
  $scope.roseTwo = {
    name: "Rose",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Rose (3).JPG",
    coverTwo: "img/tiaras/Rose (4).JPG",
    page: "rose.html",
    description: "Tiaras encapadas manualmente, com cetim, lações sofisticados em paetê."
  }
  $scope.sofia = {
    name: "Sofia",
    price: 18.90,
    ref: 01010,
    quantidade: 4,
    cover: "img/tiaras/Sofia (1).JPG",
    coverTwo: "img/tiaras/Sofia (2).JPG",
    page: "sofia.html",
    description: "Tiara encapada manualmente com cetim, flores ricamente bordadas com pérolas e strass."
  }
  $scope.yasmin = {
    name: "Yasmin",
    price: 16.90,
    ref: 01020,
    quantidade: 4,
    cover: "img/tiaras/Yasmin (1).JPG",
    coverTwo: "img/tiaras/Yasmin (2).JPG",
    page: "yasmin.html",
    description: "Tiara encapada manualmente com cetim, flores em cetim, com pétalas duplas e miolo bordado em pérolas e strass."
  }
  // Tiaras ~> End

  // Bicos de pato ~> Start
  $scope.esmeralda = {
    name: "Esmeralda",
    price: 9.90,
    ref: 03091,
    quantidade: 4,
    cover: "img/bico de pato/Esmeralda (1).JPG",
    coverTwo: "img/bico de pato/Esmeralda (2).JPG",
    page: "esmeralda.html",
    description: "Bico de pato com flores em organza cristal, miolo bordado em pérolas."
  }
  $scope.jadeOne = {
    name: "Jade",
    price: 12.90,
    ref: 03010,
    quantidade: 4,
    cover: "img/bico de pato/Jade (1).JPG",
    coverTwo: "img/bico de pato/Jade (2).JPG",
    page: "jade.html",
    description: "Bico de pato em cetim bordado à mão com strass e pérola."
  }
  $scope.jadeTwo = {
    name: "Jade",
    price: 12.90,
    ref: 03010,
    quantidade: 4,
    cover: "img/bico de pato/Jade (3).JPG",
    coverTwo: "img/bico de pato/Jade (4).JPG",
    page: "jade.html",
    description: "Bico de pato em cetim bordado à mão com strass e pérola."
  }
  $scope.onix = {
    name: "Onix",
    price: 11.90,
    ref: 03090,
    quantidade: 4,
    cover: "img/bico de pato/Onix (1).JPG",
    coverTwo: "img/bico de pato/Onix (2).JPG",
    page: "onix.html",
    description: "Bico de pato com laço em paetê."
  }
  $scope.rubi = {
    name: "Rubi",
    price: 12.90,
    ref: 03010,
    quantidade: 4,
    cover: "img/bico de pato/Rubi (1).JPG",
    coverTwo: "img/bico de pato/Rubi (2).JPG",
    page: "rubi.html",
    description: "Bico de pato bordado à mão, com pérolas e strass."
  }
  $scope.safiraOne = {
    name: "Safira",
    price: 11.90,
    ref: 03090,
    quantidade: 4,
    cover: "img/bico de pato/Safira (1).JPG",
    coverTwo: "img/bico de pato/Safira (2).JPG",
    page: "safira.html",
    description: "Bico de pato com delicadas flores em cetim fosco."
  }
  $scope.safiraTwo = {
    name: "Safira",
    price: 11.90,
    ref: 03090,
    quantidade: 4,
    cover: "img/bico de pato/Safira (3).JPG",
    coverTwo: "img/bico de pato/Safira (4).JPG",
    page: "safira.html",
    description: "Bico de pato com delicadas flores em cetim fosco."
  }
  $scope.topazio = {
    name: "Topázio",
    price: 12.90,
    ref: 03010,
    quantidade: 4,
    cover: "img/bico de pato/Topazio (1).JPG",
    coverTwo: "img/bico de pato/Topazio (2).JPG",
    page: "topazio.html",
    description: "Bico de pato com delicadas flores em cetim fosco."
  }
  // Bicos de pato ~> End

  // Calcinhas ~> Start
  $scope.calcinhaOne = {
    name: "Calcinha com faixa",
    price: 29.60,
    ref: 05000,
    quantidade: 4,
    cover: "img/calcinhas/Calcinha (1).JPG",
    //coverTwo: 
    page: "calcinhas.html",
    description: "Calcinha em cetim, bordada à mão, acompanha faixa em meia de seda com mesmo detalhe."
  }
  $scope.calcinhaTwo = {
    name: "Calcinha com faixa",
    price: 29.60,
    ref: 05000,
    quantidade: 4,
    cover: "img/calcinhas/Calcinha (2).JPG",
    //coverTwo: 
    page: "calcinhas.html",
    description: "Calcinha em cetim, bordada à mão, acompanha faixa em meia de seda com mesmo detalhe."
  }
  // Calcinhas ~> End


  // Sapatinhos ~> Start
  $scope.delicado = {
    name: "Delicado",
    price: 28.90,
    ref: 04021,
    quantidade: 4,
    cover: "img/sapatinhos/Delicado (1).JPG",
    coverTwo: "img/sapatinhos/Delicado (2).JPG",
    page: "delicado.html",
    description: "Sapatinho em tricô. Aplicações manuais com bordado em pérola e strass. Faixa em meia de seda, com mesmos detalhes."
  }
  $scope.fashion = {
    name: "Fashion",
    price: 28.90,
    ref: 04021,
    quantidade: 4,
    cover: "img/sapatinhos/Fashion (1).JPG",
    coverTwo: "img/sapatinhos/Fashion (2).JPG",
    page: "fashion.html",
    description: "Sapatinho em tricô com aplicações bordadas à mão, com pérolas, strass e lantejoulas. Faixa em meia de seda com os mesmos detalhes."
  }
  $scope.ternura = {
    name: "Ternura",
    price: 28.90,
    ref: 04021,
    quantidade: 4,
    cover: "img/sapatinhos/Ternura (1).JPG",
    coverTwo: "img/sapatinhos/Ternura (2).JPG",
    page: "ternura.html",
    description: "Sapatinho em tricô, detalhe com lacinho cata-vento em fita de veludo, bordado com strass e pérola. Faixa em meia de seda com os mesmos detalhes."
  }

  // Gravata borboleta ~> Start
  $scope.borboletaBege = {
    name: "Borboleta",
    price: 6.20,
    ref: 07001,
    quantidade: 4,
    cover: "img/gravatas/Borboleta (1).JPG",
    //coverTwo: 
    page: "borboleta.html",
    description: "Gravatinha borboleta para ocasião especial ou casual. Acabamento perfeito."
  }
  $scope.borboletaBranca = {
    name: "Borboleta",
    price: 6.20,
    ref: 07001,
    quantidade: 4,
    cover: "img/gravatas/Borboleta (2).JPG",
    //coverTwo: 
    page: "borboleta.html",
    description: "Gravatinha borboleta para ocasião especial ou casual. Acabamento perfeito."
  }
  $scope.borboletaAzul = {
    name: "Borboleta",
    price: 6.20,
    ref: 07001,
    quantidade: 4,
    cover: "img/gravatas/Borboleta (3).JPG",
    //coverTwo: 
    page: "borboleta.html",
    description: "Gravatinha borboleta para ocasião especial ou casual. Acabamento perfeito."
  }
  
  // Gravata borboleta ~> End

  // Gravata ~> Start
  $scope.gravataAmarela = {
    name: "Gravata",
    price: 8.70,
    ref: 07000,
    quantidade: 4,
    cover: "img/gravatas/Gravata (1).JPG",
    //coverTwo: 
    page: "gravata.html",
    description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
  }
  $scope.gravataAzulClara = {
    name: "Gravata",
    price: 8.70,
    ref: 07000,
    quantidade: 4,
    cover: "img/gravatas/Gravata (2).JPG",
    //coverTwo: 
    page: "gravata.html",
    description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
  }
  $scope.gravataListradaTorto = {
    name: "Gravata",
    price: 8.70,
    ref: 07000,
    quantidade: 4,
    cover: "img/gravatas/Gravata (3).JPG",
    //coverTwo: 
    page: "gravata.html",
    description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
  }
  $scope.gravataVermelha = {
    name: "Gravata",
    price: 8.70,
    ref: 07000,
    quantidade: 4,
    cover: "img/gravatas/Gravata (4).JPG",
    //coverTwo: 
    page: "gravata.html",
    description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
  }
  $scope.gravataPreta = {
    name: "Gravata",
    price: 8.70,
    ref: 07000,
    quantidade: 4,
    cover: "img/gravatas/Gravata (5).JPG",
    //coverTwo: 
    page: "gravata.html",
    description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
  }
  $scope.gravataListradaReto = {
    name: "Gravata",
    price: 8.70,
    ref: 07000,
    quantidade: 4,
    cover: "img/gravatas/Gravata (6).JPG",
    //coverTwo: 
    page: "gravata.html",
    description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
  }

  // Gravata ~> end

  // Suspensorio ~> Start
  $scope.suspensorioBege = {
    name: "Suspensório",
    price: 13.90,
    ref: 10001,
    quantidade: 4,
    cover: "img/suspensorios/Suspensorio (1).JPG",
    coverTwo: "img/suspensorios/Suspensorio (2).JPG",
    coverThree: "img/suspensorios/Suspensorio (3).JPG",
    page: "suspensorio.html",
    description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
  }
  $scope.suspensorioPreto = {
    name: "Suspensório",
    price: 13.90,
    ref: 10001,
    quantidade: 4,
    cover: "img/suspensorios/Suspensorio (4).JPG",
    page: "suspensorio.html",
    description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
  }
  $scope.suspensorioAzul = {
    name: "Suspensório",
    price: 13.90,
    ref: 10001,
    quantidade: 4,
    cover: "img/suspensorios/Suspensorio (5).JPG",
    page: "suspensorio.html",
    description: "Gravatinhas para ocasião especial ou casual, de excelente acabamento, nozinho perfeito. Várias estampas e padrões."
  }
  // Suspensorio ~> End


  /*$("#testLocalStorage").on('click', function () {
    localStorage.setItem("testModel", $scope.anne.name);
    localStorage.setItem("testDescription", $scope.anne.description);
  });

  $("#testDisplayModel").html(localStorage.getItem("testModel"));
  $("#testDisplayDescription").html(localStorage.getItem("testDescription")); */
}]);