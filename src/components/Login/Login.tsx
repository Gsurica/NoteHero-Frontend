import { SubHeaders } from "../../shared/components/SubHeaders/SubHeaders"
import { Title } from "../../shared/components/TitleHeader/Title"
import { LoginForm } from "./components/LoginForm"

export const Login: React.FC = () => {
  return (
    <div>
      <div>
        <Title title="Welcome to Note Hero!" phrase="Log your account! use Note hero!!" />
      </div>
      <div>
        <SubHeaders title="Note Hero!" phrase="Your friend to your hours!" />
      </div>
      <div>
        <LoginForm />
      </div>
    </div>
  )
}