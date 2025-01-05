import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { forgotPassword } from './authSlice';
import * as Yup from 'yup';
export default function ForgotPassword() {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
    }),
    onSubmit: (values) => {
      dispatch(forgotPassword(values));
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            values={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </div>
        <button type="submit" disabled={loading}>
          {loading ? 'Loading...' : 'Send Link'}
        </button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}
