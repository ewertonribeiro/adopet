import './style.scss';
import HomeLogo from '../../assets/Casa.svg';
import Message from '../../assets/Mensagens.svg';
import User from '../../assets/Usuário.png';
interface LogedProps {
    loged: boolean;
}

export default function Header({ loged }: LogedProps) {
    return (
        <header className="header">
            <div className="header--container">
                <div className="header--container--assets">
                    <div className='svgs'>
                    <img src={HomeLogo} />
                    <img src={Message} />
                    </div>
                    <div className='user'>

                    {loged && <img src={User} />}
                    </div>
                </div>
            </div>
        </header>
    );
}
