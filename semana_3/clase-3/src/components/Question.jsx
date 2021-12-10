import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { questionGeek } from "../Cuestionario.js";
// import { questionGeek } from "../Cuestionario.js";
import {
  DivForm,
  FormStyle,
  Titulo,
  RadioStyle,
  ButtonStyle,
} from "../styles/styles.js";

export default class question extends Component {
  constructor() {
    super();
    this.state = {
      numberQuestion: 0,
      question: {
        question: "",
        a: "",
        b: "",
        c: "",
        d: "",
        correct: "",
      },
      score: 0,
      answerSelect: "",
    };
  }
  componentDidMount() {
    const currentQuizData = questionGeek[this.state.numberQuestion];

    this.setState({
      question: {
        question: currentQuizData.question,
        a: currentQuizData.a,
        b: currentQuizData.b,
        c: currentQuizData.c,
        d: currentQuizData.d,
        correct: currentQuizData.correct,
      },
    });
  }
  handleSubmit = (e) => {
    e.target.reset();
    e.preventDefault();
    if (this.state.answerSelect === this.state.question.correct) {
      this.setState({
        score: this.state.score + 1,
      });
    }
    if (this.state.numberQuestion < questionGeek.length) {
      this.componentDidMount();
    } else {
      console.log(this.state.score);
    }
  };
  onChange = (e) => {
    this.setState({
      answerSelect: e.currentTarget.value,
    });
  };

  render() {
    console.log(this.state.answerSelect);
    return (
      <DivForm>
        <FormStyle onSubmit={this.handleSubmit}>
          <Form.Group className="control_radio" style={{ padding: "4rem" }}>
            <Titulo>{this.state.question.question}</Titulo>
            <RadioStyle
              type="radio"
              label={this.state.question.a}
              value={this.state.question.a}
              name={"respuestas"}
              id={"respuesta1"}
              onChange={this.onChange}
            />
            <RadioStyle
              type="radio"
              label={this.state.question.b}
              value={this.state.question.b}
              name={"respuestas"}
              id={"respuesta2"}
              onChange={this.onChange}
            />
            <RadioStyle
              type="radio"
              label={this.state.question.c}
              value={this.state.question.c}
              name={"respuestas"}
              id={"respuesta3"}
              onChange={this.onChange}
            />
            <RadioStyle
              type="radio"
              label={this.state.question.d}
              value={this.state.question.d}
              name={"respuestas"}
              id={"respuesta4"}
              onChange={this.onChange}
            />
          </Form.Group>
          <ButtonStyle
            variant="primary"
            type="submit"
            onClick={() => {
              this.setState({
                numberQuestion: this.state.numberQuestion + 1,
              });
            }}
          >
            Enviar
          </ButtonStyle>
          <h2 style={{ textAlign: "center" }}>
            {this.state.score}/{questionGeek.length}
          </h2>
        </FormStyle>
      </DivForm>
    );
  }
}
