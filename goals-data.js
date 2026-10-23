/* Reference discovery data, adapted for the existing browser-local app. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory();else root.GoalPlannerData=factory()})(typeof window==='undefined'?this:window,function(){
'use strict';
const BUSINESS_MODELS = [
  { id: 'automation', label: 'AI automation for small businesses' },
  { id: 'content', label: 'Original AI-assisted content business' },
  { id: 'product', label: 'AI-powered small digital product' }
];
const SCORECARD_CRITERIA = [
  { id: 'remote', label: 'Remote flexibility' },
  { id: 'maintenance', label: 'Low maintenance / interruption tolerance' },
  { id: 'profit', label: 'Plausible profit pathway' },
  { id: 'skill', label: 'Skill fit / learnability' },
  { id: 'demand', label: 'Validated customer demand' }
];

const MONTHLY_SEEDS = [
  { id: '2026-11-ai-validation', period: '2026-11', title: 'Explore and test AI business opportunities', category: 'business', pillarId: 'income', finishLine: 'Compare three models, produce two small demonstrations, gather prospective customer feedback, and select strongest candidate.', checkpoints: [
    { id: 'nov-w1', label: 'Compare three candidate models', weekStart: '2026-11-01', weekEnd: '2026-11-07', options: { Research: ['Compare customer problems', 'Compare required skills', 'Estimate operating costs'], 'Business models': ['Evaluate AI automation', 'Evaluate AI-assisted content', 'Evaluate AI digital product'], 'Deployment fit': ['Check remote requirements', 'Check interruption tolerance', 'List deployment risks'], Evidence: ['Write one-page comparison', 'Identify first two prototypes', 'Record uncertain assumptions'] } },
    { id: 'nov-w2', label: 'Build working prototype #1', weekStart: '2026-11-08', weekEnd: '2026-11-14', options: { Planning: ['Choose first customer problem', 'Specify a minimal demonstration', 'Set a short build scope'], Building: ['Create prototype #1', 'Test critical workflow', 'Record limitations'], 'Customer fit': ['Describe intended user', 'Explain customer value', 'Prepare demonstration'], Evidence: ['Capture demo video', 'Document costs', 'Record build time'] } },
    { id: 'nov-w3', label: 'Build working prototype #2', weekStart: '2026-11-15', weekEnd: '2026-11-21', options: { Planning: ['Choose different business model', 'Define a smaller scope', 'Identify demonstration audience'], Building: ['Create prototype #2', 'Test main use case', 'Compare implementation effort'], 'Customer fit': ['Write benefit statement', 'Prepare feedback questions', 'Find relevant reviewers'], Evidence: ['Capture working demo', 'Document costs', 'Record learning'] } },
    { id: 'nov-w4', label: 'Get feedback and select candidate', weekStart: '2026-11-22', weekEnd: '2026-11-30', options: { Outreach: ['Contact relevant prospective users', 'Show demonstrations', 'Ask about current paid alternatives'], Evidence: ['Record at least five relevant conversations in total, if feasible', 'Document objections', 'Document genuine interest'], Comparison: ['Score models after testing', 'Review time commitments', 'Review deployment fit'], Decision: ['Choose strongest candidate', 'Document why', 'List December validation questions'] } }
  ] },
  { id: '2026-12-ai-validation', period: '2026-12', title: 'Choose and validate one AI business offer', category: 'business', pillarId: 'income', finishLine: 'Select one model, define a target customer and priced offer, test real purchase interest, and record a Go / Revise / Stop decision.', checkpoints: [
    { id: 'dec-w1', label: 'Select model and ideal customer', weekStart: '2026-12-01', weekEnd: '2026-12-07' },
    { id: 'dec-w2', label: 'Create a concrete paid offer', weekStart: '2026-12-08', weekEnd: '2026-12-14' },
    { id: 'dec-w3', label: 'Test genuine customer interest', weekStart: '2026-12-15', weekEnd: '2026-12-21' },
    { id: 'dec-w4', label: 'Decide Go / Revise / Stop', weekStart: '2026-12-22', weekEnd: '2026-12-31' }
  ] }
];

const WEEKLY_LANES = [
  { id: 'forward', title: 'Move Forward', description: 'Must advance an existing monthly mission; choose a linked monthly mission first.' },
  { id: 'handle', title: 'Handle Business', description: 'Choose a concrete household, personal admin, financial, or organization task.' },
  { id: 'life', title: 'Live Your Life', optional: true, description: 'Choose a fun, relationship, hobby, or community experience.' }
];

const DISCOVERY = {
  monthly: {
    business: { label: 'Business & Income', icon: 'briefcase', areas: {
      'AI business exploration': ['Validate two AI business ideas','Build and demo an AI automation','Create and test a small AI product'],
      'Digital services': ['Publish a working services portfolio','Complete a client-ready web prototype','Build a simple service offer'],
      'Forex development': ['Complete a documented strategy backtest','Build a risk-first practice journal']
    } },
    fitness: { label: 'Mobility & Fitness', icon: 'activity', areas: {
      'Mobility foundation': ['Arrange clinical knee/ankle evaluation and establish prescribed plan','Follow an individualized rehab routine consistently'],
      'Strength & physique': ['Complete an appropriately modified strength block','Establish a sustainable workout log']
    } },
    lifestyle: { label: 'Lifestyle & Relationships', icon: 'heart', areas: {
      Travel: ['Plan a meaningful trip to one country','Research and budget two realistic 2027 destinations'],
      Experiences: ['Complete one memorable local experience','Plan and complete a hobby project'],
      Relationships: ['Plan intentional shared experiences','Reconnect with people who matter'],
      Faith: ['Establish a manageable devotional routine','Reflect on how to strengthen my relationship with God']
    } },
    creative: { label: 'Creative Projects', icon: 'camera', areas: {
      Photography: ['Complete and publish a photo series','Prepare three future Vivid Opticz posts'],
      Content: ['Finish a small creative video project','Publish a polished portfolio update']
    } }
  },
  handle: {
    'Home & Cleaning': ['Deep-clean the bathtub','Organize the bedroom closet','Clean and organize the kitchen'],
    'Personal Admin': ['Handle one delayed errand','Organize important documents','Plan upcoming appointments'],
    'Money & Bills': ['Review recurring subscriptions','Review monthly spending','Organize upcoming payments'],
    'Digital Organization': ['Sort photo files','Clean up computer folders','Organize digital resources']
  },
  life: {
    'Fun & Adventure': ['Try a new local activity','Plan an enjoyable outing','Explore a new place'],
    Relationships: ['Plan an intentional date night','Reconnect with a friend','Share a meaningful activity'],
    'Hobbies & Creativity': ['Take a photography walk','Try a new creative skill','Enjoy a hobby session'],
    'Community & Social': ['Attend a local community event','Join a group activity','Make plans with friends']
  }
};


return {BUSINESS_MODELS,SCORECARD_CRITERIA,MONTHLY_SEEDS,WEEKLY_LANES,DISCOVERY};
});
