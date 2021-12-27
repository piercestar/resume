function Header() {

  const name = "Terence Kong"
  const title = "Software Engineer. DevOps. Full Stack Developer."
  const hp_no = "+6583232898"
  const callTo = "tel:" + hp_no
  const email = "kong_terence@hotmail.com"
  const emailTo = "mailto:" + email
  const github = "https://github.com/piercestar"
  const linkedin = "https://www.linkedin.com/in/terence-kong-02091a14a/"
  const gitlab = "https://gitlab.com/tko.developer.02"
  const resume = "https://piercestar.github.io/resume/"

  return (
    <div class="mt-10 mb-10 text-center "> 
      <div class="text-5xl"><a href={resume}><b> {name} </b></a></div>
      <div class="text-center text-blue-400 font-semibold"> {title} </div>
      <div class="flex flex-wrap justify-center items-center align-middle space-x-1.5">
        <a href={callTo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
          </svg>
        </a>
        <a class="sm:block hidden" href={callTo}> 
           {hp_no}
        </a>
        <div class="sm:block hidden"> | </div>
        <a href={emailTo}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
              <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
          </svg>
        </a>
        <a class="sm:block hidden" href={emailTo}> 
          {email}
        </a>
        <div class="inline sm:block hidden"> | </div>
        <a href={github}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
          </svg>
        </a>
        <a href={linkedin}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
            <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/>
          </svg>
        </a>
        <a href={gitlab}> 
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">ß
            <path fill="none" stroke="black" stroke-width="1"
          d="M 3.29,0.78 C 3.19,0.50 2.80,0.50 2.70,0.78 2.70,0.78 0.93,6.24 0.93,6.24 0.93,6.24 5.06,6.24 5.06,6.24 5.05,6.24 3.29,0.78 3.29,0.78 3.29,0.78 3.29,0.78 3.29,0.78 Z M -0.03,8.99 C -0.11,9.24 -0.02,9.52 0.19,9.68 0.19,9.68 7.94,15.43 7.94,15.43   7.94,15.43 0.87,6.24 0.87,6.24   0.87,6.24 -0.03,8.99 -0.03,8.99 Z M 5.15,6.24 C 5.15,6.24 8.09,15.43 8.09,15.43    8.09,15.43 11.04,6.24 11.04,6.24    11.04,6.24 5.15,6.24 5.15,6.24 Z  M 16.08,8.99  C 16.08,8.99 15.18,6.24 15.18,6.24    15.18,6.24 8.11,15.43 8.11,15.43    8.11,15.43 15.86,9.68 15.86,9.68    16.08,9.52 16.16,9.24 16.08,8.99    16.08,8.99 16.08,8.99 16.08,8.99 Z  M 13.30,0.78  C 13.21,0.50 12.81,0.50 12.71,0.78    12.71,0.78 10.94,6.24 10.94,6.24    10.94,6.24 15.07,6.24 15.07,6.24    15.07,6.24 13.30,0.78 13.30,0.78 Z" />
            </svg>
        </a>

      </div>
    </div>
  );
}

export default Header;
