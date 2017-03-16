class DomainType < ApplicationRecord
  validates :name, format: { with: /[^ \t]{8}/, message: "The name is at lest 8 character" }
end
