import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SearchIcon from '@material-ui/icons/Search';
import { muscles, exercises } from './'


const useStyles = makeStyles(theme => ({
  URL_list: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.URL_list}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary= "http://www.politifact.com/truth-o-meter/statements/2015/sep/23/donald-trump/hillary-clinton-obama-birther-fact-check/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.factcheck.org/2015/06/where-does-clinton-foundation-money-go/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.snopes.com/hillary-clinton-freed-child-rapist-laughed-about-it/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.snopes.com/hillary-clinton-blackface-photo/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.politifact.com/truth-o-meter/statements/2016/mar/02/ted-cruz/yes-donald-trump-has-been-linked-mob/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.politifact.com/truth-o-meter/lists/people/comparing-hillary-clinton-donald-trump-truth-o-met/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.snopes.com/politics/clintons/zeifman.asp" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.politifact.com/punditfact/statements/2016/nov/18/blog-posting/no-3-million-undocumented-immigrants-did-not-vote-/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.factcheck.org/2015/07/was-hillary-clinton-the-original-birther/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.politifact.com/personalities/donald-trump/?platform=hootsuite" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.politifact.com/wisconsin/statements/2016/sep/30/donald-trump/nuclear-claim-donald-trump-says-hillary-clinton-ga/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.snopes.com/alicia-machado-adult-star/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.snopes.com/hillary-clinton-stupid-quote/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.politifact.com/truth-o-meter/statements/2015/oct/12/hillary-clinton/clinton-there-have-been-7-benghazi-probes-so-far/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.politifact.com/truth-o-meter/statements/2014/may/12/john-garamendi/prior-benghazi-were-there-13-attacks-embassies-and/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.politifact.com/punditfact/statements/2015/oct/01/viral-image/viral-image-wrongly-accuses-clinton-stealing/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.snopes.com/hillary-clinton-uranium-russia-deal/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.politifact.com/personalities/donald-trump/statements/byruling/pants-fire/" />
        </ListItem>
        <ListItem button>
          <ListItemIcon>
            <SearchIcon />
          </ListItemIcon>
          <ListItemText primary="http://www.politifact.com/personalities/donald-trump/statements/byruling/false" />
        </ListItem>
      </List>
    </div>
  );
}