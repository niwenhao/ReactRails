class Word < ApplicationRecord
  belongs_to :domain
  belongs_to :common_word
end
