import { SubHeaders } from '../../shared/components/SubHeaders/SubHeaders';
import { Title } from '../../shared/components/TitleHeader/Title';
import { RegisterForm } from './components/RegisterForm';

export const Register = () => {
  return (
    <div>
      <div>
        <Title title="Welcome to Note Hero!" phrase="Create your account! use our Site!" />
      </div>
      <div>
        <SubHeaders title="Note Hero!" phrase="Your friend to your hours!" />
      </div>
      <div>
        <RegisterForm />
      </div>
    </div>
  )
}
