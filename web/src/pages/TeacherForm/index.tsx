import React, { useState, FormEvent } from "react";
import { useHistory } from "react-router-dom";

import api from "../../services/api";

import PageHeader from "../../components/PageHeader";
import Input from "../../components/Input";
import Textarea from "../../components/TextArea";
import Select from "../../components/Select";

import warningIcon from "../../assets/images/icons/warning.svg";

import { PageTeacherForm, Main, Fieldset, Footer, Button } from "./styles";

function TeacherForm() {
  const history = useHistory();

  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [bio, setBio] = useState("");

  const [subject, setSubject] = useState("");
  const [cost, setCost] = useState("");

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: "", to: "" },
  ]);

  function addNewScheduleItem() {
    setScheduleItems([...scheduleItems, { week_day: 0, from: "", to: "" }]);
  }

  function setScheduleItemsValue(
    position: number,
    field: string,
    value: string
  ) {
    const updatedScheduleItems = scheduleItems.map((scheduleItem, index) => {
      if (index === position) {
        return { ...scheduleItem, [field]: value };
      }

      return scheduleItem;
    });

    setScheduleItems(updatedScheduleItems);
  }

  function handleCreateClass(e: FormEvent) {
    e.preventDefault();

    api
      .post("classes", {
        name,
        avatar,
        whatsapp,
        bio,
        subject,
        cost: Number(cost),
        schedule: scheduleItems,
      })
      .then(() => {
        alert("Cadastro realizado com sucesso!");

        history.push("/");
      })
      .catch(() => {
        alert("Erro no cadastro.");
      });
  }

  return (
    <PageTeacherForm>
      <PageHeader
        title='Que incrível que você quer dar aulas.'
        description='o primeiro passo é preencher esse formulário de inscrição.'
      />

      <Main>
        <form onSubmit={handleCreateClass}>
          <Fieldset>
            <legend>Seus dados</legend>

            <Input
              name='name'
              label='Nome completo'
              value={name}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
            <Input
              name='avatar'
              label='Avatar'
              value={avatar}
              onChange={(e) => {
                setAvatar(e.target.value);
              }}
            />
            <Input
              name='whatsapp'
              label='WhatsApp'
              value={whatsapp}
              onChange={(e) => {
                setWhatsapp(e.target.value);
              }}
            />
            <Textarea
              name='bio'
              label='Biografia'
              value={bio}
              onChange={(e) => {
                setBio(e.target.value);
              }}
            />
          </Fieldset>

          <Fieldset>
            <legend>Sobre a aula</legend>

            <Select
              name='subject'
              label='Matéria'
              value={subject}
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              options={[
                { value: "Artes", label: "Artes" },
                { value: "Biologia", label: "Biologia" },
                { value: "Ciências", label: "Ciências" },
                { value: "Ed. Física", label: "Ed. Física" },
                { value: "Física", label: "Física" },
                { value: "Geografia", label: "Geografia" },
                { value: "História", label: "História" },
                { value: "Matemática", label: "Matemática" },
                { value: "Português", label: "Português" },
                { value: "Quimica", label: "Quimica" },
                { value: "Filosofia", label: "Filosofia" },
                { value: "Sociologia", label: "Sociologia" },
              ]}
            />

            <Input
              name='cost'
              label='Custo da sua hora por aula'
              value={cost}
              onChange={(e) => {
                setCost(e.target.value);
              }}
            />
          </Fieldset>

          <Fieldset>
            <legend>
              Horários disponíveis
              <button type='button' onClick={addNewScheduleItem}>
                + Novo Horário
              </button>
            </legend>

            {scheduleItems.map((scheduleItem, index) => {
              return (
                <div key={scheduleItem.week_day} className='schedule-item'>
                  <Select
                    name='week_day'
                    label='Dia da semana'
                    value={scheduleItem.week_day}
                    onChange={(e) =>
                      setScheduleItemsValue(index, "week_day", e.target.value)
                    }
                    options={[
                      { value: "0", label: "Domingo" },
                      { value: "1", label: "Segunda-feira" },
                      { value: "2", label: "Terça-feira" },
                      { value: "3", label: "Quarta-feira" },
                      { value: "4", label: "Quinta-feira" },
                      { value: "5", label: "Sexta-feira" },
                      { value: "6", label: "Sábado" },
                    ]}
                  />

                  <Input
                    name='from'
                    label='Das'
                    type='time'
                    value={scheduleItem.from}
                    onChange={(e) =>
                      setScheduleItemsValue(index, "from", e.target.value)
                    }
                  />
                  <Input
                    name='to'
                    label='Até'
                    type='time'
                    value={scheduleItem.to}
                    onChange={(e) =>
                      setScheduleItemsValue(index, "to", e.target.value)
                    }
                  />
                </div>
              );
            })}
          </Fieldset>

          <Footer>
            <p>
              <img src={warningIcon} alt='Aviso importante' />
              Importante! <br />
              Preencha todos os dados
            </p>
            <Button type='submit'>Salvar cadastro</Button>
          </Footer>
        </form>
      </Main>
    </PageTeacherForm>
  );
}

export default TeacherForm;
