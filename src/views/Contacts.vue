<template>
  <div class="contacts">
    <div class="section-title">
      <span>Contacts</span>
    </div>
    <div class="section">
      <div class="contacts-search">
        <input
          v-model="contactSearch"
          placeholder="Contact username"
          class="contacts-search-input input" />
        <button
          @click="showAddContactSheet"
          class="btn primary">
            <font-awesome-icon :icon="['fas', 'plus']" class="expand-icon"/>
        </button>
      </div>
      <div class="contacts-list list">
        <template v-if="!!filteredContacts.length">
          <div
            @click="startConversation(contact)"
            v-for="(contact, ind) of filteredContacts"
            :key="ind"
            class="contacts-list-contact list-item">
            <span>{{ contact.username }}</span>
            <StatusIndicator :contact="contact" />
          </div>
        </template>
        <div
          v-else
          class="contacts-list-contact list-item disabled">
          No contacts found
        </div>
      </div>
    </div>
    <div class="section-title">
      <span>Incoming Requests</span>
    </div>
    <div class="section">
      <div class="incoming-requests-list list">
        <template v-if="user && user.incomingContactRequests && !!user.incomingContactRequests.length">
          <div
            v-for="(contact, ind) of user.incomingContactRequests"
            :key="ind"
            class="incoming-requests-list-contact list-item">
            <span>{{ contact.username }}</span>
            <button
              @click="acceptRequest(contact)"
              class="btn sm primary"
              :class="{ disabled: acceptRequestLoading }">
                <font-awesome-icon v-if="acceptRequestLoading" :icon="['fas', 'spinner']" spin class="expand-icon"/>
                <font-awesome-icon v-else :icon="['fas', 'check']" class="expand-icon"/>
            </button>
          </div>
        </template>
        <div
          v-else
          class="incoming-requests-list-contact list-item disabled">
          No incoming requests
        </div>
      </div>
    </div>
    <div class="section-title">
      <span>Sent Requests</span>
    </div>
    <div class="section">
      <div class="sent-requests-list list">
        <template v-if="user && user.outgoingContactRequests && !!user.outgoingContactRequests.length">
          <div
            v-for="(contact, ind) of user.outgoingContactRequests"
            :key="ind"
            class="sent-requests-list-contact list-item">
            {{ contact.username }}
          </div>
        </template>
        <div
          v-else
          class="sent-requests-list-contact list-item disabled">
          No sent requests
        </div>
      </div>
    </div>
    <Sheet
      :show="showAddContact"
      :title="'Add Contact'"
      @close="closeAddContactSheet">
      <div class="contacts-add">
        <div class="contacts-add-search">
          <input
            v-model="contactAddSearch"
            placeholder="Contact username"
            class="contacts-add-search-input input" />
          <button
            @click="searchContactsAdd"
            class="btn primary"
            :class="{ disabled: addContactSearchLoading }">
              <font-awesome-icon v-if="addContactSearchLoading" :icon="['fas', 'spinner']" spin class="expand-icon"/>
              <font-awesome-icon v-else :icon="['fas', 'search']" class="expand-icon"/>
          </button>
        </div>
        <div class="contacts-add-results">
          <div class="contacts-add-results-list list">
            <template v-if="!!addContactsResults.length">
              <div
                v-for="(contact, ind) of addContactsResults"
                :key="ind"
                class="contacts-add-results-list-contact list-item">
                <span>{{ contact.username }}</span>
                <button
                  @click="newContactAdd(contact)"
                  class="btn sm primary"
                  :class="{ disabled: addContactLoading || existingRequest(contact) }">
                    <font-awesome-icon v-if="addContactLoading" :icon="['fas', 'spinner']" spin class="expand-icon"/>
                    <font-awesome-icon v-else :icon="['fas', 'plus']" class="expand-icon"/>
                </button>
              </div>
            </template>
            <div
              v-else
              class="contacts-add-results-list-contact list-item disabled">
              No contacts found
            </div>
          </div>
        </div>
      </div>
    </Sheet>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import Sheet from '@/components/Sheet.vue';
import StatusIndicator from '@/components/StatusIndicator.vue';

export default {
  name: 'contacts',
  data() {
    return {
      contactSearch: '',
      contactAddSearch: '',
      addContactLoading: false,
      addContactSearchLoading: false,
      acceptRequestLoading: false,
      addContactsResults: [],
      showAddContact: false
    };
  },
  mounted() {
    this.$store.dispatch('PING_ONLINE_USERS');
  },
  computed: {
    ...mapState({
      user: state => state.user
    }),
    filteredContacts() {
      let contacts = [];
      if (this.user && this.user.contacts.length && !!this.contactSearch.length) {
        contacts = this.user.contacts.filter(c => c.username.includes(this.contactSearch));
      } else if (this.user && this.user.contacts.length) {
        contacts = this.user.contacts;
      }
      return contacts;
    }
  },
  methods: {
    startConversation(contact) {
      this.$store.dispatch('START_CONVERSATION', contact._id)
        .then(response => {
          this.$router.push({ name: 'messaging', params: { conversation: this.$store.state.currentConversation } });
        })
        .catch(error => {
          console.log(error);
        });
    },
    showAddContactSheet() {
      this.showAddContact = true;
    },
    closeAddContactSheet() {
      this.showAddContact = false;
      this.contactAddSearch = '';
      this.addContactsResults = [];
    },
    searchContactsAdd() {
      if (!!this.contactAddSearch.length) {
        this.addContactSearchLoading = true;
        this.$store.dispatch('SEARCH_USERS', { term: this.contactAddSearch })
          .then(response => {
            this.addContactSearchLoading = false;
            this.addContactsResults = response;
          });
      }
    },
    newContactAdd(contact) {
      this.addContactLoading = true;
      this.$store.dispatch('SEND_CONTACT_REQUEST', { contactId: contact._id })
        .then(response => {
          this.addContactLoading = false;
        });
    },
    existingRequest(contact) {
      return this.user.outgoingContactRequests.find(r => r._id === contact._id);
    },
    acceptRequest(contact) {
      this.acceptRequestLoading = true;
      this.$store.dispatch('ACCEPT_CONTACT_REQUEST', { requestContactId: contact._id })
        .then(response => {
          this.acceptRequestLoading = false;
        });
    },
  },
  components: {
    Sheet,
    StatusIndicator
  }
}
</script>

<style lang="scss" scoped>
.contacts {
  width: 100%;
  height: 100%;
  padding: 15px;
  
  .contacts-search {
    width: 100%;
    display: flex;

    .contacts-search-input {
      margin-top: 0;
      margin-right: 5px;
      flex: 1;
    }

    .btn {
      margin-top: 0;
    }
  }

  .contacts-add {
    .contacts-add-search {
      width: 100%;
      display: flex;

      .contacts-add-search-input {
        margin-right: 5px;
        flex: 1;
      }
    }
  }

  .list-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}
</style>
