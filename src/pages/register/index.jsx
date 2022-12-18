import { useNavigate } from "react-router-dom"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { MdEmail, MdLock, MdPerson } from "react-icons/md"

import React from "react"
import {
  Container,
  Column,
  Row,
  SubtitleLogin,
  Title,
  TitleLogin,
  Wrapper,
  Policies,
  CriarText,
} from "./styles"
import { useForm } from "react-hook-form"

const Register = () => {
  const navigate = useNavigate()

  const handleClickSignUp = () => {
    navigate("/login")
  }

  const {
    control,
    formState: { errors },
  } = useForm({
    reValidateMode: "onChange",
    mode: "onChange",
  })
  return (
    <>
      <Header />
      <Container>
        <Column>
          <Title>
            A plataforma para você aprender com experts, dominar as principais
            tecnologias e entrar mais rápido nas empresas mais desejadas.
          </Title>
        </Column>
        <Column>
          <Wrapper>
            <TitleLogin>Começe agora grátis</TitleLogin>
            <SubtitleLogin>Crie sua conta e make the change._</SubtitleLogin>
            <form>
              <Input
                placeholder="Nome Completo"
                leftIcon={<MdPerson color="#8647AD" />}
                name="nome"
                control={control}
              />
              {errors.name && <span>Nome é obrigatório</span>}
              <Input
                placeholder="E-mail"
                leftIcon={<MdEmail color="#8647AD" />}
                name="email"
                control={control}
              />
              {errors.email && <span>E-mail é obrigatório</span>}
              <Input
                placeholder="Password"
                leftIcon={<MdLock color="#8647AD" />}
                name="senha"
                control={control}
              />
              {errors.senha && <span>Senha é obrigatório</span>}
              <Button
                onClick={handleClickSignUp}
                title="Criar minha conta"
                variant="secondary"
                type="submit"
              />
            </form>
            <Row>
              <Policies>
                Ao clicar em "criar minha conta grátis", declaro que aceito as
                Políticas de Privacidade e os Termos de Uso da DIO.
              </Policies>
            </Row>
            <Row>
              <Policies>Já tenho conta.</Policies>
              <CriarText>Fazer login</CriarText>
            </Row>
          </Wrapper>
        </Column>
      </Container>
    </>
  )
}

export { Register }
