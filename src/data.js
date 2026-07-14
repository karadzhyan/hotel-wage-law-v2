export const product = Object.freeze({
  name: 'Hotel Wage Law',
  descriptor: 'Hospitality wage-and-hour intelligence and control',
  reviewedThrough: 'June 13, 2026',
  corpus: { issueBriefs: 18, jurisdictions: 51, hotelLaws: 19, tools: 10 },
  disclaimer: 'Prototype only. Enterprise names, people, scores, ranges, workflow states, and property facts are illustrative. Legal content requires attorney validation before production use.'
});

export const routes = Object.freeze([
  ['/', 'Platform'],
  ['/intelligence/', 'Intelligence'],
  ['/jurisdictions/', 'Jurisdictions'],
  ['/tools/', 'Tools'],
  ['/methodology/', 'Evidence standard'],
  ['/app/', 'Portfolio command'],
  ['/app/changes/', 'Changes'],
  ['/app/matters/', 'Matter'],
  ['/app/controls/', 'Controls'],
  ['/app/research/', 'Research'],
  ['/app/decisions/', 'Decision record'],
  ['/app/properties/', 'Property intelligence']
]);

export const changes = Object.freeze([
  { id:'CHG-2026-118', date:'Jun 13', jurisdiction:'California · Los Angeles', title:'Hotel wage and health-benefit step takes effect July 1', reach:'7 likely properties', status:'Response open', materiality:'critical' },
  { id:'CHG-2026-114', date:'Jun 12', jurisdiction:'Federal', title:'Independent-contractor enforcement posture changes', reach:'11 properties · 2 vendor categories', status:'Triage complete', materiality:'high' },
  { id:'CHG-2026-109', date:'Jun 10', jurisdiction:'New York', title:'Hospitality wage-order spread-of-hours guidance revised', reach:'5 properties · payroll review', status:'Matter opened', materiality:'high' },
  { id:'CHG-2026-105', date:'Jun 8', jurisdiction:'Illinois · Chicago', title:'Tipped-wage freeze and local coverage clarified', reach:'4 properties', status:'Scoped', materiality:'elevated' }
]);

export const properties = Object.freeze([
  { id:'DTLA-01', name:'Downtown Los Angeles Hotel', city:'Los Angeles', rooms:438, employees:312, readiness:62, status:'Evidence gap', owner:'Marcus Lee' },
  { id:'SM-02', name:'Santa Monica Coastal Hotel', city:'Santa Monica', rooms:286, employees:224, readiness:79, status:'Reconciliation', owner:'Priya Shah' },
  { id:'LGB-03', name:'Long Beach Waterfront Hotel', city:'Long Beach', rooms:374, employees:271, readiness:83, status:'Testing', owner:'Jamie Chen' },
  { id:'WH-04', name:'West Hollywood Hotel', city:'West Hollywood', rooms:164, employees:141, readiness:92, status:'Ready', owner:'Elena Ruiz' }
]);

export const controls = Object.freeze([
  { id:'CTL-PAY-014', name:'Hotel wage rate-table deployment', domain:'Payroll', coverage:88, evidence:'Current', exceptions:1, owner:'Priya Shah' },
  { id:'CTL-BEN-006', name:'Qualifying health-benefit contribution validation', domain:'Benefits', coverage:71, evidence:'Gap', exceptions:2, owner:'Marcus Lee' },
  { id:'CTL-TIME-021', name:'Housekeeper workload exception review', domain:'Timekeeping', coverage:94, evidence:'Current', exceptions:0, owner:'Elena Ruiz' },
  { id:'CTL-SCH-010', name:'Predictive-schedule change logging', domain:'Scheduling', coverage:91, evidence:'Current', exceptions:1, owner:'Jamie Chen' },
  { id:'CTL-TIP-008', name:'Service-charge classification review', domain:'F&B / Banquets', coverage:86, evidence:'Review', exceptions:1, owner:'Noah Williams' }
]);

export const jurisdictions = Object.freeze([
  ['CA','California',4,'$16.90+','No tip credit','Daily + weekly','Extensive local hotel laws'],
  ['NY','New York',4,'$15.50–$16.50','Hospitality tiers','Weekly + spread','Industry wage order'],
  ['WA','Washington',4,'$16.66+','No tip credit','Weekly','Seattle / SeaTac'],
  ['MA','Massachusetts',4,'$15.00','$6.75 cash wage','Weekly','Tips Act overlay'],
  ['IL','Illinois',4,'$15.00','Credit limited','Weekly','Chicago overlay'],
  ['CO','Colorado',3,'$14.81+','Credit limited','Daily / 12-hour','Local floors'],
  ['DC','District of Columbia',3,'$17.95','Phasing out','Weekly + split','Local tipped rules'],
  ['OR','Oregon',3,'$14.70+','No tip credit','Weekly','Fair-workweek reach'],
  ['NV','Nevada',3,'$12.00','No tip credit','Daily / rolling 24','Hospitality overlays'],
  ['CT','Connecticut',3,'$16.35','Occupation tiers','Weekly','Daily-duties rules'],
  ['NJ','New Jersey',3,'$15.49','Credit limited','Weekly','Hotel protection law'],
  ['HI','Hawaii',3,'$14.00','Narrow credit','Weekly','Service-charge law'],
  ['AK','Alaska',2,'$13.00','No tip credit','Daily + weekly','Statewide'],
  ['AZ','Arizona',2,'$14.70','Credit limited','Weekly','State remedies'],
  ['FL','Florida',2,'$14.00','Credit limited','Weekly','Statewide floor'],
  ['PA','Pennsylvania',2,'$7.25','State rules','Weekly','Pay-law remedies'],
  ['TX','Texas',1,'$7.25','Federal model','Weekly','Federal-heavy baseline'],
  ['TN','Tennessee',1,'$7.25','Federal model','Weekly','Federal-heavy baseline']
].map(([code,name,tier,rate,tip,overtime,hotel]) => ({code,name,tier,rate,tip,overtime,hotel})));

export const tools = Object.freeze([
  ['audit','Workweek compliance auditor','Resolve federal, state, local, and hotel-specific pay obligations against one worker week.','Shifts · pay · location · date','Itemized findings + cited math'],
  ['audit','Housekeeper workload auditor','Test square-footage caps, proration, premium pay, and piece-rate decomposition.','Rooms · area · shifts','Coverage + premium trace'],
  ['design','Tip pool & service-charge architect','Model participant eligibility, pool structure, service-charge classification, and downstream regular-rate effects.','Roles · charges · distribution','Per-person verdicts'],
  ['planning','Portfolio rate forecaster','Project scheduled wage and benefit steps across properties and expose budget deltas.','Properties · schedules · horizon','Forecast + calendar'],
  ['risk','Exposure and penalty modeler','Model statutory remedies, assumptions, and scenario sensitivity without collapsing uncertainty into one number.','Population · period · findings','Range + assumptions'],
  ['planning','Fair-workweek premium calculator','Apply covered-employer, worker, schedule-change, notice, and premium rules.','Employer · worker · schedule','Coverage + premium trace'],
  ['assessment','Hotel compliance profiler','Turn property, room-count, workforce, and system facts into an effective-dated obligation profile.','Property passport facts','Applicable obligations'],
  ['audit','Tipped overtime calculator','Show state-aware weekly pay, credit assumptions, overtime math, and disallowed-credit consequences.','Rate · hours · credit · state','Step-by-step calculation'],
  ['audit','Regular-rate calculator','Build a regular rate from multiple rates, bonuses, service charges, premiums, and alternative methods.','Pay codes · hours · bonuses','Rate build + true-up'],
  ['assessment','Exemption checker','Resolve salary basis, salary level, duties, state overlays, and commissioned-employee paths.','Role · salary · duties','Layered determination']
].map(([family,title,description,inputs,output], index) => ({id:`TL-${String(index+1).padStart(3,'0')}`,family,title,description,inputs,output})));

export const evidenceLayers = Object.freeze([
  ['01','Primary authority','Statutes, regulations, ordinances, cases, and official publications.','Immutable source'],
  ['02','Official guidance','Agency rules, FAQs, notices, and enforcement materials.','Versioned guidance'],
  ['03','Canonical analysis','Approved explanations, issue structures, and interpretation notes.','Attorney reviewed'],
  ['04','Enterprise facts','Property, workforce, payroll, benefits, schedule, and policy data.','Provenance + freshness'],
  ['05','Deterministic logic','Coverage predicates, calculations, branch traces, fixtures, and tests.','Reproducible'],
  ['06','Counsel judgment','Interpretation, materiality, recommendation, and conditions.','Named approval'],
  ['07','Response evidence','Configuration, tests, communications, and accepted operating proof.','Assured operation']
]);
