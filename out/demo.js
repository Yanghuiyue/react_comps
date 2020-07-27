function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// const numbers = [1,2,3,4,5];
// const listItems = numbers.map((numbers) =>
//   <li>{numbers}</li>
// );

var _require = require("babel-types"),
    react = _require.react;

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
  if (props.celsius >= 100) {
    return React.createElement(
      "p",
      null,
      "The water would boil."
    );
  }
  return React.createElement(
    "p",
    null,
    "The water would not boil."
  );
}

var Calculator = function (_react$Component) {
  _inherits(Calculator, _react$Component);

  function Calculator() {
    _classCallCheck(this, Calculator);

    return _possibleConstructorReturn(this, (Calculator.__proto__ || Object.getPrototypeOf(Calculator)).apply(this, arguments));
  }

  return Calculator;
}(react.Component);