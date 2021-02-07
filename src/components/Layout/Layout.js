import Wrapper from '../../hoc/Wrapper';

const layout = (props) => {
    console.log(props);
    return <Wrapper>
        <nav>Navbar</nav>
        <main>
            {props.children}
        </main>
    </Wrapper>
}

export default layout;