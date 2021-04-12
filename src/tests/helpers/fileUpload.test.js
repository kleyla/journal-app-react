import cloudinary from "cloudinary";
import { fileUpload } from "../../helpers/fileUpload";

cloudinary.config({
  cloud_name: "dmakd1ykk",
  api_key: "198734443763857",
  api_secret: "IEO7NY7qpXumDICsMXlGbFEBFJw",
});

describe("Pruebas en fileUpload", () => {
  test("Debe de catgar un archivo y retotnar el URL", async (done) => {
    const resp = await fetch(
      "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Step6skasm.PNG/245px-Step6skasm.PNG"
    );
    const blob = await resp.blob();
    const file = new File([blob], "foto.PNG");
    const url = await fileUpload(file);
    // console.log(url);
    expect(typeof url).toBe("string");

    const segements = url.split("/");
    const imageId = segements[segements.length - 1].replace(".PNG", "");
    cloudinary.v2.api.delete_resources(imageId, {}, () => {
      //   done();
    });
  });

  test("Debe de retornar un error", async () => {
    const file = new File([], "foto.png");
    const url = await fileUpload(file);
    expect(url).toBe(null);
  });
});
