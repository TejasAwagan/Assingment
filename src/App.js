import './App.css';
import Filter from './components/Filter';

function App() {
  const filters=[
    {label:'Date of registration',inputType:'select',
      options:[
        {value:'',label:''},
        {value:'2003',label:'2003'},
        {value:'2002',label:'2002'},
        {value:'2001',label:'2001'},
      ]
    },

    {label:'Vendor Score', inputType:'select', options:[
      {value:'',label:''},
      {value:'High',label:'High'},
      {value:'Medium',label:'Medium'},
      {value:'Low',label:'Low'},
    ]},

    {label: 'Rating', inputType:'select', options: [{value:'',label:''},
      {value:'3',label:'3 stars'},
      {value:'2',label:'2 stars'},
      {value:'1',label:'1 star'},]},

    {label:'Status', inputType:'select' ,options:[
      {value:'',label:''},
      {value:'Active',label:'Active'},
      {value:'Inactive',label:'Inactive'},
      
    ]},

    {label:'Type of Business',inputType:'select', options:[
      {value:'',label:''},
      {value:'Retail',label:'Retail'},
      {value:'wholesale',label:'wholesale'},
      {value:'Service',label:'Service'},
    ]},

    {label:'Location', inputType:'select', options:[
      {value:'',label:''},
      {value:'Pune',label:'Pune'},
      {value:'Mumbai',label:'Mumbai'},
      {value:'Nagpur',label:'Nagpur'},
    ]},

    {label:'Assign To', inputType:'select', options:[
      {value:'',label:''},
      {value:'Team X',label:'Team X'},
      {value:'Team Y',label:'Team Y'},
      {value:'Team Z',label:'Team Z'},
    ]}
];

  return (
    <div className="App">
        <Filter filters={filters}
        buttonName="Filters" className='filter-btn'/>
    </div>
  );
}

export default App;
