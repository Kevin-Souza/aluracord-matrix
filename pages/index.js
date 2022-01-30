import appConfig from '../config.json';
import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import { useRouter } from 'next/router';
import React from 'react';

// Componente React
function Titulo(props) {
    const Tag = props.tag || 'h1' ;
    return (
        // <> </> funciona como uma tag vázia para melhor agrupar os elementos Html no JSX (relação elementos Pai e filho)
        <>
            <Tag>{props.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
                font-size: 24px;
                font-weight: 600;
            }
            `}</style>
        </>
    );
}

// Componente React
/*function HomePage() {
    //JSX
        return(     
        <div> 
            <GlobalStyle/>
            <Title tag="h2">Boas Vindas de volta!</Title>
            <h2>Discord - Alura Matrix</h2>

        </div>
        ) 
  }
  export default HomePage */

export default function PaginaInicial() {
    //const username = 'kevin-souza';
    const [username, setUsername]= React.useState('kevin-souza');
    const roteamento = useRouter();
    // acima temos exemplos de hooks no react são eles:  useState e useRouter

    return (
        <>
            <Box
                styleSheet={{
                    display: 'flex', alignItems: 'center', justifyContent: 'right',
                    //backgroundColor: appConfig.theme.colors.primary[500],
                    backgroundImage: 'url(https://images.unsplash.com/photo-1607811253515-57ef7723099d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80)',
                    backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundBlendMode: 'multiply',
                }}
            >
                <Box
                    styleSheet={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: {
                            xs: 'column',
                            sm: 'row',
                        },
                        width: '100%', maxWidth: '550px',
                        borderTopLeftRadius: '50px', borderBottomRightRadius: '50px', 
                        padding: '32px', margin: '16px',
                        boxShadow: '0 2px 10px 0 rgb(0 0 0 / 20%)',
                        backgroundColor: appConfig.theme.colors.translucent['fundo'],
                    }}
                >
                    {/* Formulário */}
                    <Box
                        as="form"
                        onSubmit={function (infosDoEvento) {
                            infosDoEvento.preventDefault();
                            //console.log('Alguem submeteu o form');
                            /*função tradicional do navegador para transação de pagina window.location...*/
                            // window.location.href = '/chat';

                            /*Maneira que o next disponibiliza para realizar a transação de pagina 
                            sem acontecer um refresh na página*/
                            roteamento.push(`/chat?username=${username}`);
                            // roteamento.push('/chat' + username);
                        }}
                        styleSheet={{
                            display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
                            width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
                        }}
                    >
                        <Titulo tag="h2">Bem vindo de volta!</Titulo>
                        <Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300] }}>
                            {appConfig.name}
                        </Text>

                        {/* <input
                            type="text"
                            value={username}
                            onChange={function handler(event) {
                                console.log('Usuário digitou', event.target.value);
                                // Onde ta o valor?
                                const valor = event.target.value;
                                //Troca ro valor da variável
                                //através do React e avise quem precisa
                                setUsername(valor);
                            }}
                        /> */}

                        <TextField
                        value={username}
                        onChange={function handler(event) {
                            console.log('Usuário digitou', event.target.value);
                            // Onde ta o valor?
                            const valor = event.target.value;
                            //Troca ro valor da variável
                            //através do React e avise quem precisa
                            setUsername(valor);
                        }}
                            fullWidth
                            textFieldColors={{
                                neutral: {
                                    textColor: appConfig.theme.colors.neutrals[200],
                                    mainColor: appConfig.theme.colors.neutrals[900],
                                    mainColorHighlight: appConfig.theme.colors.primary[500],
                                    backgroundColor: appConfig.theme.colors.neutrals[800],
                                },
                            }}
                        />
                        <Button
                            type='submit'
                            label='Entrar'
                            fullWidth
                            buttonColors={{
                                contrastColor: appConfig.theme.colors.neutrals["000"],
                                mainColor: appConfig.theme.colors.primary[500],
                                mainColorLight: appConfig.theme.colors.primary[400],
                                mainColorStrong: appConfig.theme.colors.primary[600],
                            }}
                        />
                    </Box>
                    {/* Formulário */}


                    {/* Photo Area */}
                    <Box
                        styleSheet={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            maxWidth: '200px',
                            padding: '16px',
                            //backgroundColor: appConfig.theme.colors.translucent["moldura"],
                            //border: '1px solid',
                            borderColor: appConfig.theme.colors.neutrals[999],
                            borderRadius: '10px',
                            flex: 1,
                            minHeight: '240px',
                        }}
                    >
                        <Image
                            styleSheet={{
                                borderRadius: '50%',
                                marginBottom: '16px',
                            }}
                            src={`https://github.com/${username}.png`}
                        />
                        <Text
                            variant="body4"
                            styleSheet={{
                                color: appConfig.theme.colors.neutrals[200],
                                //backgroundColor: appConfig.theme.colors.neutrals[900],
                                padding: '3px 10px',
                                borderRadius: '1000px'
                            }}
                        >
                            {username}
                        </Text>
                    </Box>
                    {/* Photo Area */}
                </Box>
            </Box>
        </>
    );
}
