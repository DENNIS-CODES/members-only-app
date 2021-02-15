import React from 'react';

function SigninScreen(props) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const userSignin = useSelector(state => state.userSignin);
    const { loading, userInfo, error } = userSignin;
    const dispatch = useDispatch();
    const redirect = props.location.search ? props.location.search.split("=")[1] : '/';
    useEffect(() => {
        if (userInfo) {
            props.history.push(redirect);
        }
        return () => {
            //
        };
    }, [userInfo]);
    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }

}