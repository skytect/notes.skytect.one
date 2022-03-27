#include <stdio.h>
#include <windows.h>

void ignore_me_init_buffering()
{
    setvbuf(stdin, NULL, _IONBF, 0);
    setvbuf(stdout, NULL, _IONBF, 0);
    setvbuf(stderr, NULL, _IONBF, 0);
}

void print_menu()
{
    puts("Welcome to the GovTech! We envision our nation to be empowered with posibilities through infocomm technology and related engineering technology.");
    puts("If you are interested in using technology to make an impact and inspire change at the national level, here are some options for students and graduates:");
    puts("1. The Smart Nation Scholarship");
    puts("2. GeekOut");
    puts("3. Internships");
    puts("4. Technology Associate Programme (TAP)");
    puts("5. I've learnt all about them! Sign me up!");
}

void the_smart_nation_scholarship()
{
    puts("The Smart Nation Scholarship");
    puts("============================");
    puts("The Smart Nation Scholarship develops and nurtures talent who have a passion for technology, "
         "and the ambition to propel our nation towards its goal of digital transformation."
         "\n\n"
         "Offered by GovTech, as well as Cyber Security Agency of Singapore and Infocomm Media Development Authority, "
         "the Smart Nation Scholarship gives talented individuals the opportunity to embark on a dynamic career "
         "in technology that contribute towards the public good.\n");
    puts("Applications are open from September until April for each cycle. "
         "If you have a passion for technology and a strong desire to play a part in our Smart Nation agenda, "
         "learn more about the scholarship at https://go.gov.sg/smartnationscholarship.\n");
}

void geek_out()
{
    puts("GeekOut");
    puts("=======");
    puts("Showcase your innovation and imagination by participating in GeekOut, a five-day technology bootcamp. "
         "We are challenging you to experience different technologies, and build practical tech solutions.\n");
    puts("GeekOut is organised twice yearly. "
         "You may indicate your interest at the link provided so that we can notify you when application is open. "
         "Visit https://form.gov.sg/forms/govtech/5bb6d8c0df1bd8000f5040d3 to register your interest now!\n");
}

void internships()
{
    puts("Internships");
    puts("===========");
    puts("Gain the opportunity to work on projects beyond IT, "
         "and be part of a team of committed people that drive transformation through technology. "
         "GovTech provides a range of tech and non-tech internship roles for both "
         "current university and polytechnic students. If you have a passion for technology, "
         "and are team oriented, experience a tech internship with us today!\n");
    puts("We welcome university and polytechnic students to apply for our internships. "
         "Check out a wide range of internship opportunities across many exciting domains. "
         "Visit https://sggovterp.wd102.myworkdayjobs.com/en-US/PublicServiceCareers/job/Government-Technology-Agency/GovTech-2022-Internship_JR-10000007096 to apply now!\n");
}

void technology_associate_programme()
{
    puts("Technology Associate Programme (TAP)");
    puts("====================================");
    puts("An exclusive leadership-trainee programme, TAP is designed to sharpen and develop "
         "your technical knowledge and professional skills. You will gain two years of specialist training, "
         "and be groomed to take on specialist and/or technology leadership roles within GovTech – accelerating your career development.\n");
    puts("Applications are open from 1 May to 31 July 2021. If you are passionate about the use of technology "
         "to shape our future and better the lives of Singaporeans, join us to make an impact! "
         "Visit https://go.gov.sg/govtech-tap to apply now!\n");
}

void get_feedback()
{
	char feedback[0x100];
    gets(feedback);
}

int main()
{
	SetProcessDEPPolicy(0);
    ignore_me_init_buffering();

    int choice;
    do
    {
        print_menu();
        printf("Which programme are you interested in? ");
        scanf("%d", &choice);
        fflush(stdin);

        switch (choice)
        {
            case 1:
                the_smart_nation_scholarship();
                break;
            case 2:
                geek_out();
                break;
            case 3:
                internships();
                break;
            case 4:
                technology_associate_programme();
                break;
            case 5:
                break;
            default:
                printf("Error %d: Invalid choice.\n", 0xe4ff);
        }
    }
    while(choice != 5);
	getchar();

    puts("Before you go, feel free to leave some feedback for us if you have any.");
    get_feedback();
    puts("Thank you for the feedback!");

    puts("Good bye!");
    return 0;
}
