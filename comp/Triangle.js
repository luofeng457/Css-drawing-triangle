import { Divider, Slider, InputNumber, Row, Col, Radio } from "antd";
import { useState, useReducer, useEffect } from "react";
import "../public/comp/Triangle.css";

const initialState = {
  val_lt: false,
  val_rt: false,
  val_tt: false,
  val_bt: false,
}
const reducer = (state, action) => {
  let newState= JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'cblt':
      newState.val_lt = !state.val_lt;
      break;
    case 'cbrt':
      newState.val_rt = !state.val_rt;
      break;
    case 'cbtt':
        newState.val_tt = !state.val_tt;
        break;
    case 'cbbt':
        newState.val_bt = !state.val_bt;
        break;
    default:
      break;
  }
  return newState;
}

const Triangle = () => {
  const [w, setW] = useState(100);
  const [h, setH] = useState(100);
  const [bl, setBl] = useState(50);
  const [br, setBr] = useState(50);
  const [bt, setBt] = useState(50);
  const [bb, setBb] = useState(50);
  // const [blt, setBlt] = useState(false); // border left is transparent or not.
  // const [brt, setBrt] = useState(false);
  // const [btt, setBtt] = useState(false);
  // const [bbt, setBbt] = useState(false);

  const [isTransparent, dispatch] = useReducer(reducer, initialState);




  const borderStyle = {
    width: `${w}px`,
    height: `${h}px`,
    borderLeft: isTransparent.val_lt ? `${bl}px solid transparent` : `${bl}px solid orange`,
    borderRight: isTransparent.val_rt ? `${br}px solid transparent` : `${br}px solid purple`,
    borderTop: isTransparent.val_tt ? `${bt}px solid transparent` : `${bt}px solid greenyellow`,
    borderBottom: isTransparent.val_bt ? `${bb}px solid transparent` : `${bb}px solid peachpuff`
  };

  const [style, setStyle] = useState(borderStyle);

  const updateStyle = () => {
    setStyle({
      width: `${w}px`,
      height: `${h}px`,
      borderLeft: isTransparent.val_lt ? `${bl}px solid transparent` : `${bl}px solid orange`,
      borderRight: isTransparent.val_rt ? `${br}px solid transparent` : `${br}px solid purple`,
      borderTop: isTransparent.val_tt ? `${bt}px solid transparent` : `${bt}px solid greenyellow`,
      borderBottom: isTransparent.val_bt ? `${bb}px solid transparent` : `${bb}px solid peachpuff`
    });
  };

  useEffect(() => {
    updateStyle();
  }, [w, h, bl, br, bt, bb, isTransparent])

  return (
    <>
      <div className="container">
        <div className="box" style={style} />
      </div>
      <Divider>DIV Width</Divider>
      <Row type="flex" justify="center">
        <Col span={9}>
          <Slider
            min={0}
            max={200}
            value={w}
            onChange={val => {
              setW(val);
            }}
          />
        </Col>
        <Col span={2} offset={1}>
          <InputNumber min={0} max={200} value={w} disabled={true} />
        </Col>
      </Row>
      <Divider>DIV Height</Divider>
      <Row type="flex" justify="center">
        <Col span={9}>
          <Slider
            min={0}
            max={200}
            value={h}
            onChange={val => {
              setH(val);
            }}
          />
        </Col>
        <Col span={2} offset={1}>
          <InputNumber min={0} max={200} value={h} disabled={true} />
        </Col>
      </Row>
      <Divider>DIV Border Left</Divider>
      <Row type="flex" justify="center">
        <Col span={9}>
          <Slider
            min={0}
            max={200}
            value={bl}
            onChange={val => {
              setBl(val);
            }}
          />
        </Col>
        <Col span={2} offset={1}>
          <InputNumber min={0} max={200} value={bl} disabled={true} />
        </Col>
        <Col span={6} offset={2}>
          <Radio.Group
            value={isTransparent.val_lt}
            onChange={e => {
              dispatch({type: 'cblt'});

            }}
          >
            <Radio value={true}>True</Radio>
            <Radio value={false}>False</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Divider>DIV Border Right</Divider>
      <Row type="flex" justify="center">
        <Col span={9}>
          <Slider
            min={0}
            max={200}
            value={br}
            onChange={val => {
              setBr(val);
            }}
          />
        </Col>
        <Col span={2} offset={1}>
          <InputNumber min={0} max={200} value={br} disabled={true} />
        </Col>
        <Col span={6} offset={2}>
          <Radio.Group
            value={isTransparent.val_rt}
            onChange={e => {
              dispatch({type: 'cbrt'})
            }}
          >
            <Radio value={true}>True</Radio>
            <Radio value={false}>False</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Divider>DIV Border Top</Divider>
      <Row type="flex" justify="center">
        <Col span={9}>
          <Slider
            min={0}
            max={200}
            value={bt}
            onChange={val => {
              setBt(val);
            }}
          />
        </Col>
        <Col span={2} offset={1}>
          <InputNumber min={0} max={200} value={bt} disabled={true} />
        </Col>
        <Col span={6} offset={2}>
          <Radio.Group
            value={isTransparent.val_tt}
            onChange={e => {
              dispatch({type: 'cbtt'})
            }}
          >
            <Radio value={true}>True</Radio>
            <Radio value={false}>False</Radio>
          </Radio.Group>
        </Col>
      </Row>
      <Divider>DIV Border Bottom</Divider>
      <Row type="flex" justify="center">
        <Col span={9}>
          <Slider
            min={0}
            max={200}
            value={bb}
            onChange={val => {
              setBb(val);
            }}
          />
        </Col>
        <Col span={2} offset={1}>
          <InputNumber min={0} max={200} value={bb} disabled={true} />
        </Col>
        <Col span={6} offset={2}>
          <Radio.Group
            value={isTransparent.val_bt}
            onChange={e => {
              dispatch({type: 'cbbt'})
            }}
          >
            <Radio value={true}>True</Radio>
            <Radio value={false}>False</Radio>
          </Radio.Group>
        </Col>
      </Row>
    </>
  );
};

export default Triangle;
