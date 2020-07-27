import React from 'react'
// const numbers = [1,2,3,4,5];
// const listItems = numbers.map((numbers) =>
//   <li>{numbers}</li>
// );

// ReactDOM.render(
//   <ul>{listItems}</ul>,
//   document.getElementById('root')
// );

// －－－－－－基礎列表組件－－－－－－－－－－－－－
// function NumbderList(props) {
//   const numbers = props.numbers;
//   const listItems = numbers.map(number => {
//      return <li key={number.toString()}>{number}</li>
//   });

//   return (
//     <ul>{listItems}</ul>
//   );
// }

// const numbers = [1,2,3,4,5];
// ReactDOM.render(
//   <NumbderList numbers={numbers}/>,
//   document.getElementById('root')
// );
// ------------------------------

//－－ 處理多個輸入－－－－－－－－－－－
// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: ['coconut']};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {    
//     let temps = [...this.state.value];
//     let selectValue = event.target.value;
//     if(temps.includes(selectValue)){
//        temps.splice(temps.findIndex(item => item === selectValue),1);      
//     }else{
//       temps = [...temps, selectValue];
//     }
//     this.setState({
//       value: temps
//     })
//     event.preventDefault();
//   }

//   handleSubmit(event) {
//     alert('你喜欢的风味是: ' + JSON.stringify(this.state.value));
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           选择你喜欢的风味:
//           <select multiple value={this.state.value} onChange={this.handleChange}>
//             <option value="grapefruit">葡萄柚</option>
//             <option value="lime">酸橙</option>
//             <option value="coconut">椰子</option>
//             <option value="mango">芒果</option>
//           </select>
//         </label>
//         <input type="submit" value="提交" />
//       </form>
//     );
//   }
// }
// －－－－－－－－－－－－－－－

// ReactDOM.render(
//   <FlavorForm/>,
//   document.getElementById('root')
// );

//------------受控輸入空值-------------------------------- 
// let mountNode = document.getElementById('root');

// ReactDOM.render(<input value="hi" />, mountNode);

// setTimeout(function() {
//   ReactDOM.render(<input value={null} />, mountNode);
// }, 1000);

// －－－－－－－－－－－－－－－－－－－－


//狀態提升
function BoilingVerdict(props) {
  if(props.celsius >= 100){
    return <p>The water would boil.</p>
  }
  return <p>The water would not boil.</p>
}

function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}

class TempratureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    //this.state = {temperature: ''};
  }

  handleChange(e) {
    //this.setState({temperature: e.target.value});
    this.props.onTempratureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = scaleNames[this.props.scale];
    return (
      <fieldset>
        <legend>Enter temperature in {scale}:</legend>
        <input
          value={temperature}
          onChange={this.handleChange} />
      </fieldset>
    );
  }
}

class Calculator extends React.Component{
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {
      temprature: '',
      scale: ''
    }
  }

  handleCelsiusChange(temperature) {
    this.setState({
      scale: 'c',
      temperature
    });
  }

  handleFahrenheitChange(temperature) {
    this.setState({
      scale: 'f',
      temperature
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;
    return (
      <div>
        <TempratureInput scale="c" temperature={celsius} onTempratureChange={this.handleCelsiusChange}/>
        <TempratureInput scale="f" temperature={fahrenheit} onTempratureChange={this.handleFahrenheitChange}/>
        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
    )
  }
}

export default Calculator

