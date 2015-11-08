Package: mysqldb
Class: JDBCQuery 
				The main function of this class register driver of Mysql databse and create connection with the MySQL Server. On call it return the Object of class Connection conn.  




package mysqldb;
import java.sql.* ;

public class JDBCQuery
{
public Connection getConnection()
{
 
	Connection conn = null;
	 
     try
     {
         String userName = "root";
         String password = "astha";
         String url = "jdbc:mysql://localhost:3306/db1";
         Class.forName ("com.mysql.jdbc.Driver").newInstance ();
         conn = DriverManager.getConnection (url, userName, password);
         System.out.println ("Database connection established");
     return conn;
     }
     catch (Exception e)
     {
         System.err.println ("Cannot connect to database server"+e);
         return conn;
     }
	
 }
 }

2.
Package: Package2
Class: Java PopUP
		
		This Class generated a Splash Screen which stays on screen for 5 seconds.

package PACKAGE2;

class JavaPopUP extends javax.swing.JWindow {

private int duration ;

public JavaPopUP(int d) {
duration = d ;
}

void ShowSplash(String text) {

javax.swing.JPanel content = (javax.swing.JPanel)getContentPane() ;
content.setBackground(java.awt.Color.WHITE) ;

// Set the window's bounds & center the window
int width = 700 ;
int height = 200 ;
java.awt.Dimension screen = java.awt.Toolkit.getDefaultToolkit().getScreenSize() ;
int x = (screen.width-width) / 2 ;
int y = (screen.height - height) / 2 ;
setBounds(x,y,width,height) ;

javax.swing.JLabel myLabel = new javax.swing.JLabel("Oriental Group Of Institutes", javax.swing.JLabel.CENTER) ;

myLabel.setFont(new java.awt.Font("Courier" , java.awt.Font.BOLD,24)) ;


content.add(myLabel, java.awt.BorderLayout.CENTER ) ;

content.setBorder(javax.swing.BorderFactory.createLineBorder(new java.awt.Color(255,255,255,255),5) );

setVisible(true) ; // Display it

try {
Thread.sleep(duration) ; // Wait a little while
}
catch (Exception e) {} // ignore any errors
}

void showSplashAndExit() {
ShowSplash("Student Counselling System") ;

}

public static void main(String[] args) {
JavaPopUP splash = new JavaPopUP(5000) ; // 1000 = 1 second

splash.showSplashAndExit() ;
splash.setVisible(false);

HomeForm f=new  HomeForm();
        int width = 720 ;
                int height = 650 ;
java.awt.Dimension screen = java.awt.Toolkit.getDefaultToolkit().getScreenSize() ;
int x = (screen.width-width) / 2 ;
int y = (screen.height - height) / 2 ;
f.setBounds(x,y,width,height) ;
        f.setVisible(true);
      
    
}
}


3. Code for calling a Jframe class: 

   JFrame f=new JFrame("STUDENT COUNSELLING MANAGEMENT SYSTEM");
   f.setContentPane(new CURCOL());
   int width = 720 ;
   int height = 650 ;
   java.awt.Dimension screen = java.awt.Toolkit.getDefaultToolkit().getScreenSize() ;
   int x = (screen.width-width) / 2 ;
   int y = (screen.height - height) / 2 ;
   f.setBounds(x,y,width,height) ;
   f.setDefaultCloseOperation(JFrame.HIDE_ON_CLOSE);
   f.setVisible(true);


4. Logic for Decrementing a seat from college availability table after seat allotment :
 

       int value=0;
       int b=0;
       String value2;
            try {

            Statement stmt = conn.createStatement();


            String sql1 ="Select RNUM from alloted";
            ResultSet rs = stmt.executeQuery(sql1);
 if( sql1 != jTextField4.getText()  ) {
            String sql ="Insert into alloted values('" + jLabel12.getText() + "','" + jLabel13.getText() + "','" + jLabel14.getText() + "','"+ jLabel15.getText() + "','" + jLabel16.getText()+"','" +jLabel17.getText()+"')";
     stmt.executeUpdate(sql);
 }
     else{
         JOptionPane.showMessageDialog(this, "Seat not alloted");
            }

      

            }
    catch (Exception e) {
            System.out.println(e);
            }

            try {
            Statement stmt = conn.createStatement();
            
            String sql = "Select * from college where ColName='"+ jComboBox1.getSelectedItem().toString()+"';";
            ResultSet rs = stmt.executeQuery(sql);
            while(rs.next())
            {
            value=Integer.parseInt(rs.getString("CSE").toString());
                    //jLabel15.getText().toString()));
            System.out.println(value);

            }

           } catch (Exception e) {
            System.out.println(e.getMessage());

            }

           if(value==0)
            {
            JOptionPane.showMessageDialog(this, "No Seat Available");
            }
            else
            {
            value=value-1;
            }
          String value1 =Integer.toString(value);
         
          try {
            Statement stmt = conn.createStatement();
           String sql ="update college set "+jLabel15.getText().toString()+"='"+value1+"' where ColName='"+jLabel13.getText().toString()+"';";
            System.out.println(sql);
           b= stmt.executeUpdate(sql);
        } catch (Exception e) {
            System.out.println(e);


        }
        if (b>0)
        {
            JOptionPane.showMessageDialog(this, "Seat Alloted Sucessfully.");
        } else {
            JOptionPane.showMessageDialog(this, "Seat Not Alloted.");
        }
5. Logic for Security Login Cheak:
int b=0;
        
        String g1 = JTextField.getText();
        String g2 = jPasswordField1.getText();
        String s1=null,s2=null;
        Connection conn = new JDBCQuery().getConnection();
        try {
            Statement stmt = conn.createStatement();

            ResultSet rs=stmt.executeQuery("select * from pwd where name=\"admin\"");


            while(rs.next()) {
                s1= rs.getString(1);
                s2= rs.getString(2);

                if(s1.equals(g1) && s2.equals(g2)) {
                    JOptionPane.showMessageDialog(this, "Login Succesful");
                    AdminFrame f=new AdminFrame();
                   int width = 720 ;
                int height = 650 ;
java.awt.Dimension screen = java.awt.Toolkit.getDefaultToolkit().getScreenSize() ;
int x = (screen.width-width) / 2 ;
int y = (screen.height - height) / 2 ;
f.setBounds(x,y,width,height) ;
                    
                    f.setDefaultCloseOperation(AdminFrame.HIDE_ON_CLOSE);
                    f.setVisible(true);
                    f.getContentPane().setBackground(Color.WHITE);
                    this.dispose();
                }

                else {
                    JOptionPane.showMessageDialog(this, "Invalid User Name Or Passward");
                }
            }
        }


        catch (SQLException ex) {
            ex.printStackTrace();
        }


    }       
