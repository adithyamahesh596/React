const Card = (props) => {
	return (
  	<div style={{margin: '1em'}}>
      <img width="75" src={props.avatar_url} />
      <div style={{display: 'inline-block', marginLeft: 10}}>
        <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
          {props.name}
        </div>
        <div>{props.company}</div>
      </div>
    </div>
    );
};

let data = [
	{ name: "Terry Griffin",
  	avatar_url: "https://avatars1.githubusercontent.com/u/1043080?v=4",
    company: "MSU"},
    { name: "Adithya Mahesh Bariki",
  	avatar_url: "https://avatars0.githubusercontent.com/u/16808858?v=4",
    company: "Microsoft"},
];

const CardList = (props) => {
	return (
  	<div>
       {props.cards.map(card => <Card {...card} />)}  
   </div>
  );
}

ReactDOM.render(<CardList cards={data} />, mountNode);