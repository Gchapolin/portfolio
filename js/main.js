/**
 * Main — Project data, card rendering, modals, scroll effects, theme & language toggle
 */
(function () {
  // ============================
  // CURRENT STATE
  // ============================
  var currentLang = 'pt';
  var currentTheme = 'rpg';

  // Expose lang for typewriter
  window.getCurrentLang = function () { return currentLang; };

  // ============================
  // PROJECT DATA (bilingual)
  // ============================
  var projects = [
    {
      id: 'cellotutor',
      name: 'CelloTuttor',
      room: { en: 'Music Chamber', pt: 'C\u00E2mara da M\u00FAsica' },
      status: 'MVP',
      tagline: {
        en: 'AI-powered cello practice assistant with real-time posture analysis',
        pt: 'Assistente de pr\u00E1tica de violoncelo com IA e an\u00E1lise de postura em tempo real'
      },
      description: {
        en: 'Cross-platform app that uses MediaPipe computer vision to analyze cello players\u2019 tuning, bow technique, and body posture in real-time. Tracks 54 body landmarks for detailed feedback and provides a gamified practice experience.',
        pt: 'App multiplataforma que usa vis\u00E3o computacional MediaPipe para analisar afina\u00E7\u00E3o, t\u00E9cnica de arco e postura corporal de violoncelistas em tempo real. Rastreia 54 pontos corporais para feedback detalhado e oferece uma experi\u00EAncia gamificada de pr\u00E1tica.'
      },
      tech: ['Swift', 'SwiftUI', 'Kotlin', 'MediaPipe', 'SwiftData'],
      features: {
        en: [
          'Real-time pitch detection (442 Hz reference)',
          'Bow angle analysis with calibration system',
          'Full-body posture tracking (33+21 landmarks)',
          'Practice session history with GitHub-style heatmap',
          'Gamified streaks and daily goals'
        ],
        pt: [
          'Detec\u00E7\u00E3o de afina\u00E7\u00E3o em tempo real (refer\u00EAncia 442 Hz)',
          'An\u00E1lise do \u00E2ngulo do arco com sistema de calibra\u00E7\u00E3o',
          'Rastreamento corporal completo (33+21 pontos)',
          'Hist\u00F3rico de sess\u00F5es com heatmap estilo GitHub',
          'Streaks gamificados e metas di\u00E1rias'
        ]
      },
      github: 'https://github.com/Gchapolin/cellotutor',
      highlight: {
        en: 'MediaPipe 33+21 landmarks + pitch detection 442Hz running simultaneously on-device',
        pt: 'Pipeline MediaPipe 33+21 landmarks + detecção de pitch 442Hz rodando simultaneamente on-device'
      }
    },
    {
      id: 'monstrosaudavel',
      name: 'MonstroSaudavel',
      room: { en: 'The Arena', pt: 'A Arena' },
      status: 'Beta',
      tagline: {
        en: 'Gamified health tracking app that turns wellness into an adventure',
        pt: 'App de sa\u00FAde gamificado que transforma bem-estar em aventura'
      },
      description: {
        en: 'A cross-platform health and fitness app that gamifies daily habits like exercise, hydration and sleep. Users raise a virtual monster that evolves based on their real-world healthy behaviors, powered by Firebase for real-time sync.',
        pt: 'App multiplataforma de sa\u00FAde e fitness que gamifica h\u00E1bitos di\u00E1rios como exerc\u00EDcio, hidrata\u00E7\u00E3o e sono. Usu\u00E1rios criam um monstro virtual que evolui baseado em comportamentos saud\u00E1veis reais, com Firebase para sincroniza\u00E7\u00E3o em tempo real.'
      },
      tech: ['Swift', 'SwiftUI', 'Kotlin', 'Firebase', 'HealthKit'],
      features: {
        en: [
          'Virtual monster evolution based on health data',
          'Daily challenge system with streak rewards',
          'Real-time sync across devices via Firebase',
          'HealthKit / Google Fit integration',
          'Social leaderboards and friend challenges'
        ],
        pt: [
          'Evolu\u00E7\u00E3o do monstro virtual baseada em dados de sa\u00FAde',
          'Sistema de desafios di\u00E1rios com recompensas por streaks',
          'Sincroniza\u00E7\u00E3o em tempo real entre dispositivos via Firebase',
          'Integra\u00E7\u00E3o com HealthKit / Google Fit',
          'Rankings sociais e desafios entre amigos'
        ]
      },
      github: 'https://github.com/Gchapolin/monstrosaudavel',
      highlight: {
        en: 'HealthKit/Google Fit bridge with Firebase real-time sync and gamification engine',
        pt: 'Bridge HealthKit/Google Fit com sync Firebase em tempo real e engine de gamificação'
      }
    },
    {
      id: 'eternalpyre',
      name: 'The Eternal Pyre',
      room: { en: 'Hall of Fire', pt: 'Sal\u00E3o do Fogo' },
      status: 'Production',
      tagline: {
        en: 'Multiplayer arena survival game with wave-based combat',
        pt: 'Jogo multiplayer de sobreviv\u00EAncia em arena com combate por waves'
      },
      description: {
        en: 'A real-time multiplayer arena game built with Phaser 3 where players defend the Eternal Pyre against waves of enemies. Features WebSocket-based multiplayer, procedural wave generation, and a deep upgrade system.',
        pt: 'Jogo multiplayer em tempo real constru\u00EDdo com Phaser 3 onde jogadores defendem a Pira Eterna contra ondas de inimigos. Inclui multiplayer via WebSocket, gera\u00E7\u00E3o procedural de waves e sistema profundo de upgrades.'
      },
      tech: ['Phaser 3', 'Node.js', 'Socket.IO', 'Express', 'JavaScript'],
      features: {
        en: [
          'Real-time multiplayer via WebSocket',
          'Procedural wave generation with scaling difficulty',
          'Multiple character classes with unique abilities',
          'Upgrade and loot system between waves',
          'Dynamic arena with environmental hazards'
        ],
        pt: [
          'Multiplayer em tempo real via WebSocket',
          'Gera\u00E7\u00E3o procedural de waves com dificuldade escal\u00E1vel',
          'M\u00FAltiplas classes de personagem com habilidades \u00FAnicas',
          'Sistema de upgrade e loot entre waves',
          'Arena din\u00E2mica com perigos ambientais'
        ]
      },
      github: 'https://github.com/Gchapolin/the-eternal-pyre',
      live: 'https://eternal-pyre.fly.dev',
      highlight: {
        en: 'Server-authoritative game state with client-side prediction and rollback, <50ms latency',
        pt: 'Game state server-authoritative com client-side prediction e rollback, <50ms de latência'
      }
    },
    {
      id: 'harmonicmap',
      name: 'HarmonicMapApp',
      room: { en: 'Chamber of Maps', pt: 'C\u00E2mara dos Mapas' },
      status: 'MVP',
      tagline: {
        en: 'Interactive music theory visualization with circle of fifths',
        pt: 'Visualiza\u00E7\u00E3o interativa de teoria musical com c\u00EDrculo de quintas'
      },
      description: {
        en: 'An iOS app that provides an interactive harmonic map for musicians, visualizing chord relationships, scales, and progressions. Built with AudioKit for real-time audio synthesis and analysis.',
        pt: 'App iOS que oferece um mapa harm\u00F4nico interativo para m\u00FAsicos, visualizando rela\u00E7\u00F5es de acordes, escalas e progress\u00F5es. Constru\u00EDdo com AudioKit para s\u00EDntese e an\u00E1lise de \u00E1udio em tempo real.'
      },
      tech: ['Swift', 'SwiftUI', 'AudioKit', 'MusicTheory', 'CoreAudio'],
      features: {
        en: [
          'Interactive circle of fifths visualization',
          'Real-time chord playback and analysis',
          'Scale and mode explorer with audio preview',
          'Common chord progression templates',
          'Custom progression builder with export'
        ],
        pt: [
          'Visualiza\u00E7\u00E3o interativa do c\u00EDrculo de quintas',
          'Reprodu\u00E7\u00E3o e an\u00E1lise de acordes em tempo real',
          'Explorador de escalas e modos com preview de \u00E1udio',
          'Templates de progress\u00F5es de acordes comuns',
          'Construtor de progress\u00F5es customizadas com exporta\u00E7\u00E3o'
        ]
      },
      github: 'https://github.com/Gchapolin/harmonicmapapp',
      highlight: {
        en: 'AudioKit real-time synthesis + custom circle-of-fifths graph engine in SwiftUI',
        pt: 'Síntese em tempo real com AudioKit + engine gráfico do círculo de quintas em SwiftUI'
      }
    },
    {
      id: 'arena-catacomb',
      name: 'Arena: Catacomb',
      room: { en: 'The Catacombs', pt: 'As Catacumbas' },
      status: 'Prototype',
      tagline: {
        en: 'Peer-to-peer browser combat game using WebRTC',
        pt: 'Jogo de combate peer-to-peer no navegador usando WebRTC'
      },
      description: {
        en: 'A lightweight browser-based combat game that connects players directly via WebRTC for peer-to-peer multiplayer. No server needed after initial signaling \u2014 pure vanilla JavaScript with minimal latency.',
        pt: 'Jogo de combate leve baseado em navegador que conecta jogadores diretamente via WebRTC para multiplayer peer-to-peer. Sem servidor necess\u00E1rio ap\u00F3s a sinaliza\u00E7\u00E3o inicial \u2014 JavaScript puro com lat\u00EAncia m\u00EDnima.'
      },
      tech: ['JavaScript', 'WebRTC', 'Canvas API', 'HTML5', 'CSS3'],
      features: {
        en: [
          'Peer-to-peer connection via WebRTC',
          'Zero-server gameplay after handshake',
          'Canvas-based 2D combat system',
          'Local and remote multiplayer modes',
          'Custom matchmaking with room codes'
        ],
        pt: [
          'Conex\u00E3o peer-to-peer via WebRTC',
          'Gameplay sem servidor ap\u00F3s handshake',
          'Sistema de combate 2D baseado em Canvas',
          'Modos multiplayer local e remoto',
          'Matchmaking customizado com c\u00F3digos de sala'
        ]
      },
      github: null,
      highlight: {
        en: 'WebRTC peer-to-peer with zero-server gameplay after signaling handshake',
        pt: 'WebRTC peer-to-peer com gameplay sem servidor após handshake de sinalização'
      }
    }
  ];

  // ============================
  // COLLABORATIONS DATA (bilingual)
  // ============================
  var collaborations = [
    {
      id: 'httuicom',
      name: 'Httuicom',
      room: { en: 'Cloud Vault', pt: 'Cofre da Nuvem' },
      status: 'Production',
      tagline: {
        en: 'Cloud-based communication platform with real-time features',
        pt: 'Plataforma de comunica\u00E7\u00E3o em nuvem com recursos em tempo real'
      },
      description: {
        en: 'A modern web application built with React and TypeScript, providing real-time communication and collaboration tools. Deployed on cloud infrastructure with CI/CD pipelines and monitoring.',
        pt: 'Aplica\u00E7\u00E3o web moderna constru\u00EDda com React e TypeScript, oferecendo ferramentas de comunica\u00E7\u00E3o e colabora\u00E7\u00E3o em tempo real. Implantada em infraestrutura cloud com pipelines CI/CD e monitoramento.'
      },
      tech: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'AWS'],
      features: {
        en: [
          'Real-time messaging with WebSocket',
          'Role-based access control system',
          'File sharing with cloud storage',
          'Responsive dashboard with analytics',
          'CI/CD pipeline with automated testing'
        ],
        pt: [
          'Mensagens em tempo real com WebSocket',
          'Sistema de controle de acesso baseado em roles',
          'Compartilhamento de arquivos com armazenamento em nuvem',
          'Dashboard responsivo com analytics',
          'Pipeline CI/CD com testes automatizados'
        ]
      },
      github: 'https://github.com/Gchapolin/httuicom',
      live: 'https://httui.cloud/',
      collaborators: ['Team Project'],
      highlight: {
        en: 'Row-level security PostgreSQL + WebSocket pub/sub + CI/CD zero-downtime on AWS',
        pt: 'Row-level security PostgreSQL + WebSocket pub/sub + CI/CD zero-downtime na AWS'
      }
    }
  ];

  // ============================
  // EXPERIENCE DATA (bilingual)
  // ============================
  var experience = [
    {
      company: 'Housi',
      role: {
        en: 'Senior Product Owner \u2192 Product Manager',
        pt: 'Product Owner S\u00EAnior \u2192 Gerente de Produto'
      },
      period: { en: '2021 \u2014 Present', pt: '2021 \u2014 Atual' },
      current: true,
      detail: {
        en: 'Built the product area from the ground up, establishing processes, rituals and a data-driven culture. Designed KPI frameworks and metric governance for every product line. Led multidisciplinary squads to scale digital products, defining vision, roadmap and OKRs. Drove discovery, architecture decisions and observability initiatives.',
        pt: 'Criação da área de produto do zero, estabelecendo processos, rituais e cultura orientada a dados. Desenvolvimento de frameworks de KPIs e governança de métricas para todas as linhas de produto. Liderança de squads multidisciplinares para escalar produtos digitais, definição de visão, roadmap e OKRs. Condução de discovery, decisões de arquitetura e iniciativas de observabilidade.'
      },
      badge: 'LVL 5 \u00B7 LEADER'
    },
    {
      company: 'JSL S.A.',
      role: { en: 'Product Owner', pt: 'Product Owner' },
      period: { en: '2020 \u2014 2021', pt: '2020 \u2014 2021' },
      current: false,
      detail: {
        en: 'Business demand prioritization, process mapping, UX prototyping, product discovery and technical specs via User Stories.',
        pt: 'Prioriza\u00E7\u00E3o de demandas de neg\u00F3cio, mapeamento de processos, prototipa\u00E7\u00E3o UX, product discovery e especifica\u00E7\u00F5es t\u00E9cnicas via User Stories.'
      },
      badge: 'LVL 3 \u00B7 BUILDER'
    },
    {
      company: 'MangoBits',
      role: { en: 'Project Manager', pt: 'Gerente de Projetos' },
      period: { en: '2019 \u2014 2020', pt: '2019 \u2014 2020' },
      current: false,
      detail: {
        en: 'Leading dev teams on digital projects. Distributed architectures, incident management, process automation and SLA-driven delivery.',
        pt: 'Lideran\u00E7a de equipes de desenvolvimento em projetos digitais. Arquiteturas distribu\u00EDdas, gest\u00E3o de incidentes, automa\u00E7\u00E3o de processos e entrega orientada por SLA.'
      },
      badge: 'LVL 3 \u00B7 COMMANDER'
    },
    {
      company: 'SOMOS Educa\u00E7\u00E3o',
      role: {
        en: 'Transport Analyst \u2192 Project Analyst',
        pt: 'Analista de Transportes \u2192 Analista de Projetos'
      },
      period: { en: '2016 \u2014 2019', pt: '2016 \u2014 2019' },
      current: false,
      detail: {
        en: 'IT project management, KPI development, process improvement and logistics optimization across multiple distribution centers.',
        pt: 'Gest\u00E3o de projetos de TI, desenvolvimento de KPIs, melhoria de processos e otimiza\u00E7\u00E3o log\u00EDstica em m\u00FAltiplos centros de distribui\u00E7\u00E3o.'
      },
      badge: 'LVL 2 \u00B7 EXPLORER'
    },
    {
      company: 'DHL Logistics',
      role: {
        en: 'Transport Analyst (Jr \u2192 Sr)',
        pt: 'Analista de Transportes (Jr \u2192 Sr)'
      },
      period: { en: '2011 \u2014 2015', pt: '2011 \u2014 2015' },
      current: false,
      detail: {
        en: 'OTM system implementation, process mapping, ISO audits, KPI dashboards and nationwide cargo tracking operations.',
        pt: 'Implementa\u00E7\u00E3o do sistema OTM, mapeamento de processos, auditorias ISO, dashboards de KPIs e opera\u00E7\u00F5es de rastreamento de cargas nacional.'
      },
      badge: 'LVL 1 \u00B7 APPRENTICE'
    }
  ];

  // ============================
  // SKILLS DATA (bilingual)
  // ============================
  var skillCategories = [
    {
      title: { en: 'AI & RAPID BUILDING', pt: 'IA & CONSTRU\u00C7\u00C3O R\u00C1PIDA' },
      skills: {
        en: [
          { name: 'AI-powered MVP development', tip: 'Building minimum viable products using AI tools to accelerate from idea to working prototype.' },
          { name: 'Prompt engineering & optimization', tip: 'Crafting and refining prompts to get the best results from large language models.' },
          { name: 'AI-assisted code generation', tip: 'Using AI copilots and code generators to write, review, and refactor code faster.' },
          { name: 'LLM integration in products', tip: 'Embedding large language models into apps for features like chat, summarization, and search.' },
          { name: 'Rapid prototyping with AI tools', tip: 'Leveraging AI-powered platforms to go from concept to interactive prototype in hours.' },
          { name: 'Computer Vision (MediaPipe)', tip: 'Using Google MediaPipe to track body landmarks, hands, and poses in real-time.' }
        ],
        pt: [
          { name: 'Desenvolvimento de MVP com IA', tip: 'Constru\u00E7\u00E3o de produtos m\u00EDnimos vi\u00E1veis usando ferramentas de IA para acelerar da ideia ao prot\u00F3tipo.' },
          { name: 'Engenharia e otimiza\u00E7\u00E3o de prompts', tip: 'Cria\u00E7\u00E3o e refinamento de prompts para obter os melhores resultados de modelos de linguagem.' },
          { name: 'Gera\u00E7\u00E3o de c\u00F3digo assistida por IA', tip: 'Uso de copilotos e geradores de c\u00F3digo com IA para escrever, revisar e refatorar mais r\u00E1pido.' },
          { name: 'Integra\u00E7\u00E3o de LLM em produtos', tip: 'Incorpora\u00E7\u00E3o de modelos de linguagem em apps para chat, resumos e busca inteligente.' },
          { name: 'Prototipagem r\u00E1pida com ferramentas de IA', tip: 'Uso de plataformas com IA para ir do conceito ao prot\u00F3tipo interativo em horas.' },
          { name: 'Vis\u00E3o Computacional (MediaPipe)', tip: 'Uso do Google MediaPipe para rastrear pontos corporais, m\u00E3os e poses em tempo real.' }
        ]
      }
    },
    {
      title: { en: 'PRODUCT MANAGEMENT', pt: 'GEST\u00C3O DE PRODUTO' },
      skills: {
        en: [
          { name: 'Product vision & roadmap', tip: 'Defining the long-term direction of a product and planning the steps to get there.' },
          { name: 'Discovery & hypothesis validation', tip: 'Researching user needs and testing assumptions before committing to building features.' },
          { name: 'Backlog prioritization (RICE/ICE)', tip: 'Ranking features by Reach, Impact, Confidence, and Effort to maximize value delivered.' },
          { name: 'KPIs, OKRs & metrics dashboards', tip: 'Setting measurable goals and tracking progress with key performance indicators.' },
          { name: 'Go-to-market strategy', tip: 'Planning how to launch a product \u2014 positioning, channels, pricing, and timing.' },
          { name: 'Stakeholder management', tip: 'Aligning expectations and communication across teams, executives, and partners.' }
        ],
        pt: [
          { name: 'Vis\u00E3o e roadmap de produto', tip: 'Defini\u00E7\u00E3o da dire\u00E7\u00E3o de longo prazo do produto e planejamento das etapas para chegar l\u00E1.' },
          { name: 'Discovery e valida\u00E7\u00E3o de hip\u00F3teses', tip: 'Pesquisa de necessidades dos usu\u00E1rios e teste de suposi\u00E7\u00F5es antes de construir funcionalidades.' },
          { name: 'Prioriza\u00E7\u00E3o de backlog (RICE/ICE)', tip: 'Classifica\u00E7\u00E3o de funcionalidades por Alcance, Impacto, Confian\u00E7a e Esfor\u00E7o para maximizar valor.' },
          { name: 'KPIs, OKRs e dashboards de m\u00E9tricas', tip: 'Defini\u00E7\u00E3o de metas mensur\u00E1veis e acompanhamento de progresso com indicadores-chave.' },
          { name: 'Estrat\u00E9gia go-to-market', tip: 'Planejamento de lan\u00E7amento \u2014 posicionamento, canais, precifica\u00E7\u00E3o e timing.' },
          { name: 'Gest\u00E3o de stakeholders', tip: 'Alinhamento de expectativas e comunica\u00E7\u00E3o entre equipes, executivos e parceiros.' }
        ]
      }
    },
    {
      title: { en: 'TECH LEADERSHIP', pt: 'LIDERAN\u00C7A T\u00C9CNICA' },
      skills: {
        en: [
          { name: 'Squad leadership (Product + Design + Dev)', tip: 'Leading cross-functional teams to deliver products with alignment and autonomy.' },
          { name: 'Agile mastery (Scrum / Kanban)', tip: 'Running sprints, stand-ups, and boards to deliver value iteratively and predictably.' },
          { name: 'Architecture & integration decisions', tip: 'Choosing tech stacks, APIs, and system designs that scale and integrate well.' },
          { name: 'CI/CD & observability', tip: 'Automating deployments and monitoring systems to ship fast and catch issues early.' },
          { name: 'Lean Six Sigma (Black Belt)', tip: 'Applying statistical methods to eliminate waste and reduce process variation.' },
          { name: 'Mentoring & team development', tip: 'Coaching team members on skills, career growth, and best engineering practices.' }
        ],
        pt: [
          { name: 'Lideran\u00E7a de squad (Produto + Design + Dev)', tip: 'Lideran\u00E7a de times multifuncionais para entregar produtos com alinhamento e autonomia.' },
          { name: 'Dom\u00EDnio \u00E1gil (Scrum / Kanban)', tip: 'Condu\u00E7\u00E3o de sprints, dailies e boards para entregar valor de forma iterativa e previs\u00EDvel.' },
          { name: 'Decis\u00F5es de arquitetura e integra\u00E7\u00E3o', tip: 'Escolha de stacks, APIs e designs de sistema que escalam e se integram bem.' },
          { name: 'CI/CD e observabilidade', tip: 'Automa\u00E7\u00E3o de deploys e monitoramento para entregar r\u00E1pido e detectar problemas cedo.' },
          { name: 'Lean Six Sigma (Black Belt)', tip: 'Aplica\u00E7\u00E3o de m\u00E9todos estat\u00EDsticos para eliminar desperd\u00EDcios e reduzir varia\u00E7\u00E3o em processos.' },
          { name: 'Mentoria e desenvolvimento de equipe', tip: 'Coaching de membros do time em habilidades, carreira e boas pr\u00E1ticas de engenharia.' }
        ]
      }
    },
    {
      title: { en: 'DEVELOPMENT', pt: 'DESENVOLVIMENTO' },
      skills: {
        en: [
          { name: 'Swift / SwiftUI (iOS)', tip: 'Building native iOS apps with Apple\'s modern declarative UI framework.' },
          { name: 'Kotlin / Jetpack Compose (Android)', tip: 'Building native Android apps with Google\'s modern declarative UI toolkit.' },
          { name: 'React / TypeScript', tip: 'Creating type-safe web applications with React components and TypeScript.' },
          { name: 'Phaser 3 (Game Dev)', tip: 'Developing 2D browser games with physics, animations, and real-time multiplayer.' },
          { name: 'Node.js / Express / Socket.IO', tip: 'Building server-side APIs and real-time communication with JavaScript.' },
          { name: 'Firebase / PostgreSQL / AWS', tip: 'Using cloud databases, auth, hosting, and infrastructure for scalable backends.' }
        ],
        pt: [
          { name: 'Swift / SwiftUI (iOS)', tip: 'Constru\u00E7\u00E3o de apps iOS nativos com o framework declarativo moderno da Apple.' },
          { name: 'Kotlin / Jetpack Compose (Android)', tip: 'Constru\u00E7\u00E3o de apps Android nativos com o toolkit declarativo moderno do Google.' },
          { name: 'React / TypeScript', tip: 'Cria\u00E7\u00E3o de aplica\u00E7\u00F5es web type-safe com componentes React e TypeScript.' },
          { name: 'Phaser 3 (Game Dev)', tip: 'Desenvolvimento de jogos 2D no navegador com f\u00EDsica, anima\u00E7\u00F5es e multiplayer.' },
          { name: 'Node.js / Express / Socket.IO', tip: 'Constru\u00E7\u00E3o de APIs server-side e comunica\u00E7\u00E3o em tempo real com JavaScript.' },
          { name: 'Firebase / PostgreSQL / AWS', tip: 'Uso de bancos cloud, autentica\u00E7\u00E3o, hospedagem e infraestrutura para backends escal\u00E1veis.' }
        ]
      }
    },
    {
      title: { en: 'UX & DESIGN', pt: 'UX & DESIGN' },
      skills: {
        en: [
          { name: 'Usability testing', tip: 'Observing real users interact with a product to find pain points and improve the experience.' },
          { name: 'User journey mapping', tip: 'Visualizing every step a user takes to identify friction and opportunities.' },
          { name: 'Wireframing & prototyping', tip: 'Sketching layouts and building interactive mockups before writing code.' },
          { name: 'Data-driven UX decisions', tip: 'Using analytics, heatmaps, and user data to guide design choices.' },
          { name: 'Accessibility best practices', tip: 'Ensuring products work for everyone, including users with disabilities (WCAG).' },
          { name: 'Design system thinking', tip: 'Creating reusable components and guidelines for consistent, scalable UI.' }
        ],
        pt: [
          { name: 'Testes de usabilidade', tip: 'Observa\u00E7\u00E3o de usu\u00E1rios reais interagindo com o produto para encontrar problemas e melhorar a experi\u00EAncia.' },
          { name: 'Mapeamento de jornada do usu\u00E1rio', tip: 'Visualiza\u00E7\u00E3o de cada etapa do usu\u00E1rio para identificar fric\u00E7\u00F5es e oportunidades.' },
          { name: 'Wireframing e prototipa\u00E7\u00E3o', tip: 'Esbo\u00E7o de layouts e constru\u00E7\u00E3o de mockups interativos antes de escrever c\u00F3digo.' },
          { name: 'Decis\u00F5es de UX baseadas em dados', tip: 'Uso de analytics, heatmaps e dados de usu\u00E1rios para guiar escolhas de design.' },
          { name: 'Boas pr\u00E1ticas de acessibilidade', tip: 'Garantia de que produtos funcionem para todos, incluindo pessoas com defici\u00EAncia (WCAG).' },
          { name: 'Pensamento de design system', tip: 'Cria\u00E7\u00E3o de componentes reutiliz\u00E1veis e diretrizes para UI consistente e escal\u00E1vel.' }
        ]
      }
    },
    {
      title: { en: 'DATA & PROCESS', pt: 'DADOS & PROCESSOS' },
      skills: {
        en: [
          { name: 'Data-driven decision making', tip: 'Using data and evidence instead of gut feeling to guide product and business choices.' },
          { name: 'A/B testing & experimentation', tip: 'Running controlled experiments to measure the impact of changes before full rollout.' },
          { name: 'Process mapping & automation', tip: 'Documenting workflows and automating repetitive tasks to boost efficiency.' },
          { name: 'BI dashboards & reporting', tip: 'Building visual dashboards to monitor business metrics and generate insights.' },
          { name: 'Logistics & operations optimization', tip: 'Streamlining supply chains, routing, and operations to reduce cost and time.' },
          { name: 'Risk & cost management', tip: 'Identifying potential risks and controlling budgets to keep projects on track.' }
        ],
        pt: [
          { name: 'Tomada de decis\u00E3o baseada em dados', tip: 'Uso de dados e evid\u00EAncias ao inv\u00E9s de intui\u00E7\u00E3o para guiar decis\u00F5es de produto e neg\u00F3cio.' },
          { name: 'Testes A/B e experimenta\u00E7\u00E3o', tip: 'Execu\u00E7\u00E3o de experimentos controlados para medir o impacto de mudan\u00E7as antes do rollout.' },
          { name: 'Mapeamento e automa\u00E7\u00E3o de processos', tip: 'Documenta\u00E7\u00E3o de fluxos de trabalho e automa\u00E7\u00E3o de tarefas repetitivas para ganhar efici\u00EAncia.' },
          { name: 'Dashboards de BI e relat\u00F3rios', tip: 'Constru\u00E7\u00E3o de dashboards visuais para monitorar m\u00E9tricas de neg\u00F3cio e gerar insights.' },
          { name: 'Otimiza\u00E7\u00E3o log\u00EDstica e operacional', tip: 'Otimiza\u00E7\u00E3o de cadeias de suprimentos, rotas e opera\u00E7\u00F5es para reduzir custos e tempo.' },
          { name: 'Gest\u00E3o de riscos e custos', tip: 'Identifica\u00E7\u00E3o de riscos potenciais e controle de or\u00E7amento para manter projetos no caminho.' }
        ]
      }
    }
  ];

  // ============================
  // TEXT SWAP MAP (theme x lang)
  // ============================
  var textSwaps = {
    rpg: {
      en: {
        projectsTitle: 'THE DUNGEON',
        projectsSubtitle: 'Each room holds a different quest. Choose wisely.',
        collabsTitle: 'Guild Hall',
        collabsSubtitle: 'Allies joined. Forces combined. Victory shared.',
        collabBadge: 'Team Quest',
        experienceTitle: 'QUEST LOG',
        experienceSubtitle: 'Battles fought. Levels gained. Experience earned.',
        skillsTitle: 'SKILL TREE',
        skillsSubtitle: 'Abilities unlocked throughout the journey.',
        contactTitle: 'TREASURE ROOM',
        contactSubtitle: 'You found the treasure. Now reach out.',
        heroCta: '\u25BC EXPLORE THE DUNGEON \u25BC',
        heroDownload: '\u2193 Resume',
        contactGithubLabel: 'Scroll of Code',
        contactLinkedinLabel: 'Shield of Network',
        contactEmailLabel: 'Letter to the Hero',
        modalClose: '\u2190 BACK TO DUNGEON',
        footer: 'Built by Guilherme Ferreira \u2022 2026',
        achievementsTitle: 'ACHIEVEMENTS',
        languagesTitle: 'LANGUAGES',
        langLevelPt: 'Native',
        langLevelEn: 'Professional',
        modalTechTitle: 'TECH STACK',
        modalFeaturesTitle: 'KEY FEATURES',
        modalHighlightTitle: 'TECHNICAL HIGHLIGHT',
        modalLiveText: 'VIEW LIVE \u2192',
        modalGithubText: 'VIEW ON GITHUB \u2192',
        modalPrivateText: 'Private Repository',
        aboutTitle: 'THE HERO',
        aboutSubtitle: 'The origin story behind the quests.',
        themeToggleTitle: 'View:',
        themeLabelPro: 'Professional',
        themeLabelRpg: 'Fun'
      },
      pt: {
        projectsTitle: 'A MASMORRA',
        projectsSubtitle: 'Cada sala guarda uma miss\u00E3o diferente. Escolha com sabedoria.',
        collabsTitle: 'Hall da Guilda',
        collabsSubtitle: 'Aliados reunidos. For\u00E7as combinadas. Vit\u00F3ria compartilhada.',
        collabBadge: 'Miss\u00E3o em Equipe',
        experienceTitle: 'REGISTRO DE MISS\u00D5ES',
        experienceSubtitle: 'Batalhas travadas. N\u00EDveis conquistados. Experi\u00EAncia adquirida.',
        skillsTitle: '\u00C1RVORE DE HABILIDADES',
        skillsSubtitle: 'Habilidades desbloqueadas ao longo da jornada.',
        contactTitle: 'SALA DO TESOURO',
        contactSubtitle: 'Voc\u00EA encontrou o tesouro. Agora fa\u00E7a contato.',
        heroCta: '\u25BC EXPLORAR A MASMORRA \u25BC',
        heroDownload: '\u2193 Curr\u00EDculo',
        contactGithubLabel: 'Pergaminho do C\u00F3digo',
        contactLinkedinLabel: 'Escudo da Rede',
        contactEmailLabel: 'Carta ao Her\u00F3i',
        modalClose: '\u2190 VOLTAR \u00C0 MASMORRA',
        footer: 'Constru\u00EDdo por Guilherme Ferreira \u2022 2026',
        achievementsTitle: 'CONQUISTAS',
        languagesTitle: 'IDIOMAS',
        langLevelPt: 'Nativo',
        langLevelEn: 'Profissional',
        modalTechTitle: 'TECH STACK',
        modalFeaturesTitle: 'FUNCIONALIDADES',
        modalHighlightTitle: 'DESTAQUE TÉCNICO',
        modalLiveText: 'VER AO VIVO \u2192',
        modalGithubText: 'VER NO GITHUB \u2192',
        modalPrivateText: 'Reposit\u00F3rio Privado',
        aboutTitle: 'O HER\u00D3I',
        aboutSubtitle: 'A hist\u00F3ria por tr\u00E1s das miss\u00F5es.',
        themeToggleTitle: 'Visualiza\u00E7\u00E3o:',
        themeLabelPro: 'Profissional',
        themeLabelRpg: 'Divertida'
      }
    },
    pro: {
      en: {
        projectsTitle: 'Projects',
        projectsSubtitle: 'Built from scratch. Shipped and running.',
        collabsTitle: 'Collaborations',
        collabsSubtitle: 'Built with others. Same standards.',
        collabBadge: 'Team Project',
        experienceTitle: 'Experience',
        experienceSubtitle: 'Where I built, led, and delivered.',
        skillsTitle: 'Skills',
        skillsSubtitle: 'What I use. What I know.',
        contactTitle: 'Contact',
        contactSubtitle: 'Let\u2019s talk.',
        heroCta: 'View My Work \u2193',
        heroDownload: '\u2193 Resume',
        contactGithubLabel: 'GitHub',
        contactLinkedinLabel: 'LinkedIn',
        contactEmailLabel: 'Email',
        modalClose: '\u2190 Back',
        footer: 'Built by Guilherme Ferreira \u00B7 2026',
        achievementsTitle: 'Certifications',
        languagesTitle: 'Languages',
        langLevelPt: 'Native',
        langLevelEn: 'Professional',
        modalTechTitle: 'Tech Stack',
        modalFeaturesTitle: 'Key Features',
        modalHighlightTitle: 'Technical Highlight',
        modalLiveText: 'View Live \u2192',
        modalGithubText: 'View on GitHub \u2192',
        modalPrivateText: 'Private Repository',
        aboutTitle: 'About Guilherme',
        aboutSubtitle: 'Product leader, builder, and lifelong learner.',

        themeToggleTitle: 'View:',
        themeLabelPro: 'Professional',
        themeLabelRpg: 'Fun'
      },
      pt: {
        projectsTitle: 'Projetos',
        projectsSubtitle: 'Constru\u00EDdos do zero. No ar e funcionando.',
        collabsTitle: 'Colabora\u00E7\u00F5es',
        collabsSubtitle: 'Constru\u00EDdos com outros. Mesmo padr\u00E3o.',
        collabBadge: 'Projeto em Equipe',
        experienceTitle: 'Experi\u00EAncia',
        experienceSubtitle: 'Onde constru\u00ED, liderei e entreguei.',
        skillsTitle: 'Habilidades',
        skillsSubtitle: 'O que eu uso. O que eu sei.',
        contactTitle: 'Contato',
        contactSubtitle: 'Vamos conversar.',
        heroCta: 'Ver Meus Projetos \u2193',
        heroDownload: '\u2193 Currículo',
        contactGithubLabel: 'GitHub',
        contactLinkedinLabel: 'LinkedIn',
        contactEmailLabel: 'Email',
        modalClose: '\u2190 Voltar',
        footer: 'Feito por Guilherme Ferreira \u00B7 2026',
        achievementsTitle: 'Certifica\u00E7\u00F5es',
        languagesTitle: 'Idiomas',
        langLevelPt: 'Nativo',
        langLevelEn: 'Profissional',
        modalTechTitle: 'Tech Stack',
        modalFeaturesTitle: 'Funcionalidades',
        modalHighlightTitle: 'Destaque Técnico',
        modalLiveText: 'Ver ao Vivo \u2192',
        modalGithubText: 'Ver no GitHub \u2192',
        modalPrivateText: 'Reposit\u00F3rio Privado',
        aboutTitle: 'Sobre Guilherme',
        aboutSubtitle: 'L\u00EDder de produto, construtor e eterno aprendiz.',

        themeToggleTitle: 'Visualiza\u00E7\u00E3o:',
        themeLabelPro: 'Profissional',
        themeLabelRpg: 'Divertida'
      }
    }
  };

  // ============================
  // DOWNLOAD BUTTON SCROLL TEXTS
  // ============================
  var downloadTexts = {
    rpg: {
      en: ['Hero\'s Scroll', 'Battle Record', 'Quest Archive', 'Loot the Resume'],
      pt: ['Pergaminho do Her\u00F3i', 'Registro de Batalhas', 'Arquivo de Miss\u00F5es', 'Saquear o Curr\u00EDculo']
    }
  };

  var dlCycleTimer = null;
  var dlTypeTimer = null;

  function startDownloadCycle() {
    stopDownloadCycle();
    var btn = document.getElementById('hero-download');
    if (!btn || currentTheme !== 'rpg') return;

    var texts = downloadTexts.rpg[currentLang] || downloadTexts.rpg.en;
    var idx = 0;

    function typeText(text, cb) {
      var charIdx = 0;
      btn.textContent = '';
      function tick() {
        if (charIdx <= text.length) {
          btn.textContent = text.slice(0, charIdx);
          charIdx++;
          dlTypeTimer = setTimeout(tick, 60);
        } else {
          if (cb) dlCycleTimer = setTimeout(cb, 2000);
        }
      }
      tick();
    }

    function next() {
      typeText(texts[idx], function () {
        idx = (idx + 1) % texts.length;
        next();
      });
    }

    next();
  }

  function stopDownloadCycle() {
    if (dlCycleTimer) { clearTimeout(dlCycleTimer); dlCycleTimer = null; }
    if (dlTypeTimer) { clearTimeout(dlTypeTimer); dlTypeTimer = null; }
  }

  // ============================
  // ABOUT TEXT DATA (bilingual)
  // ============================
  var aboutText = {
    en: [
      'Product Manager with solid experience leading cross-functional teams at tech companies and digital environments. From conception to delivery of digital solutions, focused on operational efficiency, user experience, and business value.',
      'Background in projects, operations, and logistics \u2014 which gives me a systemic view when building scalable products. I work with agile methodologies, continuous discovery, and data-driven decision making.',
      'Violinist since the age of 7 and music teacher since 15, I carry discipline, creativity, and the ability to teach complex concepts into everything I build. Today I channel that same energy into developing AI-powered products.',
      'Driven by challenges that demand strategy, collaboration, and real impact \u2014 I believe product is the bridge between technology, business, and people.'
    ],
    pt: [
      'Gerente de Produtos com s\u00F3lida experi\u00EAncia liderando times multidisciplinares em empresas de tecnologia e ambientes digitais. Da concep\u00E7\u00E3o \u00E0 entrega de solu\u00E7\u00F5es digitais, com foco em efici\u00EAncia operacional, experi\u00EAncia do usu\u00E1rio e gera\u00E7\u00E3o de valor para o neg\u00F3cio.',
      'Background em projetos, opera\u00E7\u00F5es e log\u00EDstica \u2014 o que me d\u00E1 uma vis\u00E3o sist\u00EAmica na constru\u00E7\u00E3o de produtos escal\u00E1veis. Trabalho com metodologias \u00E1geis, discovery cont\u00EDnuo e tomada de decis\u00E3o orientada por dados.',
      'Violinista desde os 7 anos e professor de m\u00FAsica desde os 15, trago disciplina, criatividade e a capacidade de ensinar conceitos complexos para tudo que constru\u00ED. Hoje canalizo essa mesma energia no desenvolvimento de produtos com IA.',
      'Movido por desafios que exigem estrat\u00E9gia, colabora\u00E7\u00E3o e impacto real \u2014 acredito que produto \u00E9 ponte entre tecnologia, neg\u00F3cio e pessoas.'
    ]
  };

  // ============================
  // HELPERS
  // ============================
  function t(obj) {
    if (typeof obj === 'string') return obj;
    return obj[currentLang] || obj.en || '';
  }

  function tArr(obj) {
    if (Array.isArray(obj)) return obj;
    return obj[currentLang] || obj.en || [];
  }

  function getSwap() {
    return textSwaps[currentTheme][currentLang];
  }

  // ============================
  // RENDER ABOUT TEXT
  // ============================
  function renderAbout() {
    var container = document.getElementById('about-text');
    if (!container) return;

    var paragraphs = aboutText[currentLang] || aboutText.en;
    container.innerHTML = paragraphs.map(function (p) {
      return '<p class="about__paragraph">' + p + '</p>';
    }).join('');
  }

  // ============================
  // RENDER PROJECT CARDS
  // ============================
  var grid = document.getElementById('projects-grid');

  function renderCards() {
    if (!grid) return;

    grid.innerHTML = projects.map(function (p) {
      var statusClass = 'project-card__status--' + p.status.toLowerCase();
      var techTags = p.tech.slice(0, 3).map(function (tag) {
        return '<span class="project-card__tag">' + tag + '</span>';
      }).join('');

      return (
        '<article class="project-card fade-in" data-project="' + p.id + '" tabindex="0" role="button" aria-label="' + p.name + ' - ' + p.status + '">' +
          '<h3 class="project-card__name">' + p.name + '</h3>' +
          '<span class="project-card__room">' + t(p.room) + '</span>' +
          '<p class="project-card__tagline">' + t(p.tagline) + '</p>' +
          '<div class="project-card__tags">' + techTags + '</div>' +
          '<span class="project-card__status ' + statusClass + '">' + p.status + '</span>' +
        '</article>'
      );
    }).join('');
  }

  // ============================
  // RENDER COLLABORATION CARDS
  // ============================
  var collabsGrid = document.getElementById('collabs-grid');

  function renderCollaborations() {
    if (!collabsGrid) return;
    var s = getSwap();

    collabsGrid.innerHTML = collaborations.map(function (p) {
      var statusClass = 'project-card__status--' + p.status.toLowerCase();
      var techTags = p.tech.slice(0, 3).map(function (tag) {
        return '<span class="project-card__tag">' + tag + '</span>';
      }).join('');

      var badge = '<span class="collab-card__collab-badge">' + s.collabBadge + '</span>';

      return (
        '<article class="collab-card fade-in" data-project="' + p.id + '" tabindex="0" role="button" aria-label="' + p.name + ' - ' + p.status + '">' +
          badge +
          '<h3 class="project-card__name">' + p.name + '</h3>' +
          '<span class="project-card__room">' + t(p.room) + '</span>' +
          '<p class="project-card__tagline">' + t(p.tagline) + '</p>' +
          '<div class="project-card__tags">' + techTags + '</div>' +
          '<span class="project-card__status ' + statusClass + '">' + p.status + '</span>' +
        '</article>'
      );
    }).join('');
  }

  // ============================
  // EVENT DELEGATION FOR CARDS
  // ============================
  function handleCardInteraction(e) {
    var card = e.target.closest('.project-card, .collab-card');
    if (!card) return;

    if (e.type === 'click') {
      openModal(card.dataset.project);
    } else if (e.type === 'keydown' && (e.key === 'Enter' || e.key === ' ')) {
      e.preventDefault();
      openModal(card.dataset.project);
    }
  }

  if (grid) {
    grid.addEventListener('click', handleCardInteraction);
    grid.addEventListener('keydown', handleCardInteraction);
  }
  if (collabsGrid) {
    collabsGrid.addEventListener('click', handleCardInteraction);
    collabsGrid.addEventListener('keydown', handleCardInteraction);
  }

  // ============================
  // MODAL SYSTEM
  // ============================
  var overlay = document.getElementById('modal-overlay');
  var modal = document.getElementById('modal');
  var modalContent = document.getElementById('modal-content');
  var modalClose = document.getElementById('modal-close');
  var lastFocused = null;
  var focusTrapHandler = null;

  function openModal(projectId) {
    var allProjects = projects.concat(collaborations);
    var p = allProjects.find(function (proj) { return proj.id === projectId; });
    if (!p) return;

    lastFocused = document.activeElement;
    var s = getSwap();

    var statusClass = 'project-card__status--' + p.status.toLowerCase();

    var techBadges = p.tech.map(function (tag) {
      return '<span class="modal__tech-badge">' + tag + '</span>';
    }).join('');

    var featureItems = tArr(p.features).map(function (f) {
      return '<li>' + f + '</li>';
    }).join('');

    var liveLink = p.live
      ? '<a href="' + p.live + '" target="_blank" rel="noopener noreferrer" class="modal__github modal__live">' + s.modalLiveText + '</a> '
      : '';

    var githubLink = p.github
      ? '<a href="' + p.github + '" target="_blank" rel="noopener noreferrer" class="modal__github">' + s.modalGithubText + '</a>'
      : '<span class="modal__tech-badge" style="opacity:0.5">' + s.modalPrivateText + '</span>';

    var highlightBlock = '';
    if (p.highlight) {
      highlightBlock =
        '<div class="modal__highlight">' +
          '<h4 class="modal__section-title">' + s.modalHighlightTitle + '</h4>' +
          '<p class="modal__highlight-text">' + t(p.highlight) + '</p>' +
        '</div>';
    }

    modalContent.innerHTML =
      '<div class="modal__header">' +
        '<div>' +
          '<h3 class="modal__title" id="modal-title">' + p.name + '</h3>' +
          '<p class="modal__room">' + t(p.room) + '</p>' +
        '</div>' +
      '</div>' +
      '<span class="modal__status ' + statusClass + '">' + p.status + '</span>' +
      '<p class="modal__description">' + t(p.description) + '</p>' +
      highlightBlock +
      '<h4 class="modal__section-title">' + s.modalTechTitle + '</h4>' +
      '<div class="modal__tech">' + techBadges + '</div>' +
      '<h4 class="modal__section-title">' + s.modalFeaturesTitle + '</h4>' +
      '<ul class="modal__features">' + featureItems + '</ul>' +
      liveLink + githubLink;

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    setTimeout(function () {
      modalClose.focus();
      setupFocusTrap();
    }, 100);
  }

  function setupFocusTrap() {
    removeFocusTrap();
    focusTrapHandler = function (e) {
      if (e.key !== 'Tab') return;
      var focusable = modal.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      var first = focusable[0];
      var last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    modal.addEventListener('keydown', focusTrapHandler);
  }

  function removeFocusTrap() {
    if (focusTrapHandler) {
      modal.removeEventListener('keydown', focusTrapHandler);
      focusTrapHandler = null;
    }
  }

  function closeModal() {
    removeFocusTrap();
    overlay.classList.remove('active');
    document.body.style.overflow = '';
    if (lastFocused) lastFocused.focus();
  }

  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (overlay) {
    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) closeModal();
    });
  }

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('active')) {
      closeModal();
    }
  });

  // ============================
  // RENDER EXPERIENCE TIMELINE
  // ============================
  function renderTimeline() {
    var container = document.getElementById('timeline');
    if (!container) return;

    container.innerHTML = experience.map(function (e) {
      var currentClass = e.current ? ' timeline__item--current' : '';
      return (
        '<div class="timeline__item fade-in' + currentClass + '">' +
          '<span class="timeline__period">' + t(e.period) + '</span>' +
          '<h3 class="timeline__company">' + e.company + '</h3>' +
          '<p class="timeline__role">' + t(e.role) + '</p>' +
          '<p class="timeline__detail">' + t(e.detail) + '</p>' +
          '<span class="timeline__badge">' + e.badge + '</span>' +
        '</div>'
      );
    }).join('');
  }

  // ============================
  // RENDER SKILL TREE
  // ============================
  function renderSkills() {
    var container = document.getElementById('skills-grid');
    if (!container) return;

    container.innerHTML = skillCategories.map(function (cat) {
      var items = tArr(cat.skills).map(function (s) {
        var name = typeof s === 'string' ? s : s.name;
        var tip = (typeof s === 'object' && s.tip) ? s.tip : '';
        return '<li>' + name + (tip ? '<span class="skill-tip">' + tip + '</span>' : '') + '</li>';
      }).join('');

      return (
        '<div class="skills__category fade-in">' +
          '<h3 class="skills__category-title">' + t(cat.title) + '</h3>' +
          '<ul class="skills__list">' + items + '</ul>' +
        '</div>'
      );
    }).join('');
  }

  // ============================
  // SCROLL FADE-IN (Intersection Observer)
  // ============================
  function setupScrollAnimations() {
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.fade-in').forEach(function (el) {
      observer.observe(el);
    });

    // Staggered delays for grid items
    var grids = ['#projects-grid', '#collabs-grid', '#skills-grid'];
    grids.forEach(function (sel) {
      var container = document.querySelector(sel);
      if (!container) return;
      var items = container.querySelectorAll('.fade-in');
      items.forEach(function (item, i) {
        item.style.transitionDelay = (i * 0.08) + 's';
      });
    });
  }

  // ============================
  // APPLY TEXT SWAPS
  // ============================
  function applyTextSwaps() {
    var s = getSwap();
    if (!s) return;

    // Section titles & subtitles
    var sections = [
      { id: 'about', titleKey: 'aboutTitle', subKey: 'aboutSubtitle' },
      { id: 'projects', titleKey: 'projectsTitle', subKey: 'projectsSubtitle' },
      { id: 'collaborations', titleKey: 'collabsTitle', subKey: 'collabsSubtitle' },
      { id: 'experience', titleKey: 'experienceTitle', subKey: 'experienceSubtitle' },
      { id: 'skills', titleKey: 'skillsTitle', subKey: 'skillsSubtitle' },
      { id: 'contact', titleKey: 'contactTitle', subKey: 'contactSubtitle' }
    ];

    sections.forEach(function (sec) {
      var el = document.getElementById(sec.id);
      if (!el) return;
      var title = el.querySelector('.section-title');
      var sub = el.querySelector('.section-subtitle');
      if (title) title.textContent = s[sec.titleKey];
      if (sub) sub.textContent = s[sec.subKey];
    });

    // Hero CTA + Download
    var cta = document.querySelector('.hero__cta');
    if (cta) cta.textContent = s.heroCta;
    var dl = document.getElementById('hero-download');
    if (dl) dl.textContent = s.heroDownload;

    // Contact labels
    var contactItems = document.querySelectorAll('.contact__item');
    if (contactItems.length >= 3) {
      var labels = [s.contactGithubLabel, s.contactLinkedinLabel, s.contactEmailLabel];
      for (var i = 0; i < 3; i++) {
        var lbl = contactItems[i].querySelector('.contact__label');
        if (lbl) lbl.textContent = labels[i];
      }
    }

    // Modal close
    var closeBtn = document.getElementById('modal-close');
    if (closeBtn) closeBtn.textContent = s.modalClose;

    // Footer
    var footer = document.querySelector('.footer p');
    if (footer) footer.textContent = s.footer;

    // Achievements & Languages titles
    var achTitle = document.getElementById('achievements-title');
    if (achTitle) achTitle.textContent = s.achievementsTitle;

    var langTitle = document.getElementById('languages-title');
    if (langTitle) langTitle.textContent = s.languagesTitle;

    // Language levels
    var lvlPt = document.getElementById('lang-level-pt');
    var lvlEn = document.getElementById('lang-level-en');
    if (lvlPt) lvlPt.textContent = s.langLevelPt;
    if (lvlEn) lvlEn.textContent = s.langLevelEn;

    // Theme toggle labels
    var toggleTitle = document.getElementById('theme-toggle-title');
    var labelPro = document.getElementById('theme-label-pro');
    var labelRpg = document.getElementById('theme-label-rpg');
    if (toggleTitle) toggleTitle.textContent = s.themeToggleTitle;
    if (labelPro) labelPro.textContent = s.themeLabelPro;
    if (labelRpg) labelRpg.textContent = s.themeLabelRpg;
  }

  // ============================
  // RE-RENDER ALL DATA-DRIVEN CONTENT
  // ============================
  function reRenderAll() {
    renderAbout();
    renderCards();
    renderCollaborations();
    renderTimeline();
    renderSkills();
    applyTextSwaps();
    setupScrollAnimations();
  }

  // ============================
  // THEME TOGGLE
  // ============================
  function setTheme(theme) {
    currentTheme = theme;
    document.body.dataset.theme = theme;

    var toggle = document.getElementById('theme-switch');
    if (toggle) toggle.checked = (theme === 'rpg');

    reRenderAll();

    // Download button cycle
    if (theme === 'rpg') {
      startDownloadCycle();
    } else {
      stopDownloadCycle();
    }

    // Particles
    if (window.particlesControl) {
      if (theme === 'pro') {
        window.particlesControl.pause();
      } else {
        window.particlesControl.resume();
      }
    }

    // Typewriter
    if (window.typewriterControl) {
      window.typewriterControl.reset();
    }

    try { localStorage.setItem('portfolio-theme', theme); } catch (e) {}
  }

  // ============================
  // LANGUAGE TOGGLE
  // ============================
  function setLang(lang) {
    currentLang = lang;
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';

    // Update button states
    var btns = document.querySelectorAll('.lang-toggle__btn');
    btns.forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    reRenderAll();

    // Download button cycle
    if (currentTheme === 'rpg') {
      startDownloadCycle();
    }

    // Typewriter
    if (window.typewriterControl) {
      window.typewriterControl.reset();
    }

    try { localStorage.setItem('portfolio-lang', lang); } catch (e) {}
  }

  // ============================
  // INIT TOGGLES
  // ============================
  function initToggles() {
    // Load saved preferences
    var savedTheme = null;
    var savedLang = null;
    try {
      savedTheme = localStorage.getItem('portfolio-theme');
      savedLang = localStorage.getItem('portfolio-lang');
    } catch (e) {}

    currentTheme = savedTheme || 'pro';
    currentLang = savedLang || 'pt';

    // Apply without transition to avoid flash
    document.body.style.transition = 'none';

    document.body.dataset.theme = currentTheme;
    document.documentElement.lang = currentLang === 'pt' ? 'pt-BR' : 'en';

    var themeToggle = document.getElementById('theme-switch');
    if (themeToggle) themeToggle.checked = (currentTheme === 'rpg');

    // Set active lang button
    var btns = document.querySelectorAll('.lang-toggle__btn');
    btns.forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.lang === currentLang);
    });

    // Render everything with correct lang/theme
    reRenderAll();

    // Particles
    if (window.particlesControl && currentTheme === 'pro') {
      window.particlesControl.pause();
    }

    // Download button cycle
    if (currentTheme === 'rpg') {
      startDownloadCycle();
    }

    // Re-enable transition after paint
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.body.style.transition = '';
      });
    });

    // Theme toggle listener
    if (themeToggle) {
      themeToggle.addEventListener('change', function () {
        setTheme(themeToggle.checked ? 'rpg' : 'pro');
      });
    }

    // Language toggle listeners
    btns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        if (btn.dataset.lang !== currentLang) {
          setLang(btn.dataset.lang);
        }
      });
    });
  }

  // ============================
  // INIT
  // ============================
  function init() {
    renderAbout();
    renderCards();
    renderCollaborations();
    renderTimeline();
    renderSkills();
    setupScrollAnimations();
    initToggles();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();

