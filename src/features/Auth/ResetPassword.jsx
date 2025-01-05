import { useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { resetPassword } from './authSlice';

export default function ResetPassword() {
  const [isTokenValid, setIsTokenValid] = useState(true);
  const dispatch = useDispatch();
  const {token} = useParams();
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      password: '',
      confirmPassword: '',
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Password do not match')
        .required('Confirm Password is required'),
    }),
    onSubmit: (values) => {
      try {

        dispatch(resetPassword({ token, password: values.password }));
        navigate('/login');
      } catch (error) {
        setIsTokenValid(false);
      }
    },
  });

  if (isTokenValid) {
    return (
      <div className="error">
        Invalid or expired token. Please request a new reset link.
      </div>
    );
  }
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>New Password</label>
          <input
            type="password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.password && formik.errors.password ? (
            <div>{formik.errors.password}</div>
          ) : null}
        </div>
        <div>
          <label>Confirm New Password</label>
          <input
            type="password"
            name="confirmPassword"
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
        </div>
        <button type="submit" disabled>
          Reset Password
        </button>
      </form>
    </div>
  );
}
