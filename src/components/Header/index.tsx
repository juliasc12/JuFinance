import logoImg from '../../assets/JuFinance.png';
import { Container, Content } from './styles';

interface HearderProps{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: HearderProps){
    return(
        <Container>
            <Content>
            <img src={logoImg} alt="dt money"/>

            <button type="button" onClick={onOpenNewTransactionModal}>
                Nova Transação
            </button>

            </Content>
        </Container>
    )
}