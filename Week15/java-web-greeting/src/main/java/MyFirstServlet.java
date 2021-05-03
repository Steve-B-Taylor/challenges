import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.RequestDispatcher;

@WebServlet(urlPatterns = "/hello")
public class MyFirstServlet extends HttpServlet {

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp)
      throws ServletException, IOException {

    String greeting = "";
    String opening = "Howdy";
    String lang_code = "";
    String remaining = " from a servlet backed JSP ;-)";
    String firstName = req.getParameter("first_name");
    String lastName = req.getParameter("last_name");
    if(req.getParameter("lang") == null ||
       req.getParameter("lang").toLowerCase().trim().equals("en") ||
       req.getParameter("lang").isBlank() ||
       req.getParameter("lang").isEmpty() ) {
      opening = "Hello";
    } else if (req.getParameter("lang").toLowerCase().trim().equals("fr")) {
      opening = "Bonjour";
    } else if (req.getParameter("lang").toLowerCase().trim().equals("es")) {
      opening = "Hola";
    }

    greeting = opening + remaining + ",";
    if(firstName != null && firstName != "") {
      greeting += " " + firstName;
    }
    if(lastName != null && lastName != "") {
      greeting += " " + lastName;
    }
    RequestDispatcher dispatcher = req.getRequestDispatcher("/views/greetings/show.jsp");
    req.setAttribute("greeting", greeting);
    dispatcher.forward(req, resp);
  }
}