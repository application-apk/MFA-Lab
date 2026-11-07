
export async function onRequestPost({ request }) {

    try {

        const data = await request.json();

        const email = data.email;
        const password = data.password;

        // بيانات تجريبية فقط
        const correctEmail = "mahmoued@gmail.com";
        const correctPassword = "258025";

        if (
            email === correctEmail &&
            password === correctPassword
        ) {

            return Response.json({
                ok: true,
                message: "Login successful"
            });

        }

        return Response.json({

            ok: false,
            message: "Invalid credentials"

        }, {
            status: 401
        });

    } catch (error) {

        return Response.json({

            ok: false,
            message: "Invalid request"

        }, {
            status: 400
        });

    }

}
