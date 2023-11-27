<TopAppBar variant="static">
	<Row>
		<Section>
            <IconButton class="material-icons" on:click={() => clicked++} disabled
                >menu</IconButton>
			<!-- <Icon component={Img} style="height: 48px; width: 48px;" src="https://raw.githubusercontent.com/hperrin/svelte-material-ui/master/packages/site/static/logo.png" /> -->
			<Title>Bluelion Guides</Title>

      <IconButton class="material-icons" on:click={() => clicked++} disabled
        >accountcircle
      </IconButton>
		</Section>
	</Row>
</TopAppBar>
    <p>Home Page</p>

    <script>
        import TopAppBar, { Row, Section, Title } from '@smui/top-app-bar';
          import Button from '@smui/button';
          import Card, { Content, Actions } from '@smui/card';
          import Textfield from '@smui/textfield';
          import { Label, Icon } from '@smui/common';
          import { Img } from '@smui/common/elements';
          import IconButton from '@smui/icon-button';
          // import { mdiAccountCircle } from '@mdi/js';
          let name = '';
          let showCard = false;
          let user = localStorage.getItem("user");
          console.log('user ',user);
      </script>

<svelte:head>
	<!-- Fonts -->
  <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons">
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700">
	
  <!-- Material Typography -->
	<link rel="stylesheet" href="https://unpkg.com/@material/typography@13.0.0/dist/mdc.typography.css" />
	
	<!-- SMUI -->
	<link rel="stylesheet" href="https://unpkg.com/svelte-material-ui/bare.css" />
</svelte:head>