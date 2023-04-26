import logo from "./logo.svg";
import "./App.css";
import { useForm } from "react-hook-form";

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    criteriaMode: "all",
  });

  const registerOption = {
    name: { required: "Vui lòng điền tên" },
    email: { required: "Vui lòng điền email" },
    address: { required: "Vui lòng điền địa chỉ" },
    phoneNumber: {
      required: "Vui lòng điền số điện thoại",
      minLength: {
        value: 10,
        message: "Số điện thoại phải có 10 số",
      },
    },
  };

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form className="form" onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex">
        <div className="col-5">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Họ và tên
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              name="name"
              {...register("name", registerOption.name)}
            />
            <small>{errors?.name && errors.name.message}</small>
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">
              Địa chỉ
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              {...register("address", registerOption.address)}
            />
            <small>{errors?.address && errors.address.message}</small>
          </div>
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">
              Số điện thoại
            </label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              {...register("phoneNumber", registerOption.phoneNumber)}
            />
            <small>{errors?.phoneNumber && errors.phoneNumber.message}</small>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              {...register("email", registerOption.email)}
            />
            <small>{errors?.email && errors.email.message}</small>
          </div>
        </div>
        <div className="col-7 ms-4">
          <div className="infor mb-3">
            <h5 className="lh-base mb-2">
              Trong vòng 14 ngày qua, Anh/chị có thấy xuất hiện dấu hiệu nào sau
              đây không?
            </h5>
            <div className="form-check-item d-flex justify-content-between">
              <div className="left-check">
                <div className="my-2 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="sot"
                    {...register("sot")}
                  />
                  <label className="form-check-label" htmlFor="sot">
                    Sốt
                  </label>
                </div>
                <div className="my-2 form-check">
                  <input type="checkbox" className="form-check-input" id="ho"   {...register("ho")}/>
                  <label className="form-check-label" htmlFor="ho">
                    Ho
                  </label>
                </div>
                <div className="my-2 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="khotho"
                    {...register("khotho")}
                  />
                  <label className="form-check-label" htmlFor="khotho">
                    Khó thở
                  </label>
                </div>
              </div>
              <div className="right-check">
                <div className="my-2 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="viemphoi"
                    {...register("viemphoi")}
                  />
                  <label className="form-check-label" htmlFor="viemphoi">
                    Viêm phổi
                  </label>
                </div>
                <div className="my-2 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="dauhong"
                    {...register("dauhong")}
                  />
                  <label className="form-check-label" htmlFor="dauhong">
                    Đau họng
                  </label>
                </div>
                <div className="my-2 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="metmoi"
                    {...register("metmoi")}
                  />
                  <label className="form-check-label" htmlFor="metmoi">
                    Mệt mỏi
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="infor mt-3">
            <h5 className="lh-base mb-4">
              Trong vòng 14 ngày qua, Anh/chị có tiếp xúc với:
            </h5>
            <div className="form-check-item">
              <div className="right-check">
                <div className="my-2 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="nghingo"
                    {...register("nghingo")}
                  />
                  <label className="form-check-label" htmlFor="nghingo">
                    Người bệnh, nghi ngờ mắc COVID-19
                  </label>
                </div>
                <div className="my-2 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="benh"
                    {...register("benh")}
                  />
                  <label className="form-check-label" htmlFor="benh">
                    Người từ nước có bệnh COVID-19
                  </label>
                </div>
                <div className="my-2 form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="bieuhien"
                    {...register("bieuhien")}
                  />
                  <label className="form-check-label" htmlFor="bieuhien">
                    Người có biểu hiện(sốt, ho, khó thở, viêm phổi)
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="d-flex justify-content-end mt-3">
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default App;
