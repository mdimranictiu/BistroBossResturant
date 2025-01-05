import { FaGoogle } from "react-icons/fa";
import useAuth from "../../hook/useAuth";
import { useNavigate } from "react-router-dom";
import useAxiosPublic from "../../hook/useAxiosPublic";

const SocialLogin = () => {
    const { googleSinIn } = useAuth(); // Correct hook usage
    const navigate= useNavigate()
    const axiosPublic= useAxiosPublic()

    const handleGoogleSignIn = () => {
        googleSinIn()
        .then((res)=>{
            const userInfo={
                name: res.user.displayName,
                email:res.user.email
            }
            axiosPublic.post('/users',userInfo)
            .then(res=>{
                console.log(res.data.message)
            })
            .catch(error=>{
                console.log(error,res.data.data)
            })
        })
        .catch(error=>{
            console.log(error)
        })
        }

    return (
        <div>
            <button onClick={handleGoogleSignIn}>
                <FaGoogle /> Google
            </button>
        </div>
    );
};
export default SocialLogin